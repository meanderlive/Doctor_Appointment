import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner, Table, Container, Row, Col, Form, Card, Pagination } from 'react-bootstrap';
import { FaViruses, FaSkullCrossbones, FaHeartbeat, FaSearch, FaSyncAlt } from 'react-icons/fa';

const CovidUpdate = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    try {
      const response = await axios.get('	https://www.healthit.gov/data/open-api?source=hospital-mu-public-health-measures.csv');
      console.log(response);
      setData(response.data);
      setFilteredData(response.data);
      setLoading(false);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching COVID-19 data:', error);
      toast.error('Failed to fetch COVID-19 data.');
      setLoading(false);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const lowercasedSearch = search.toLowerCase();
      const newData = Object.entries(data).filter(([stateCode, stateData]) => {
        const { total, meta } = stateData;
        const stateName = meta?.name?.toLowerCase() || '';
        const districts = stateData.districts || {};
        const matchingDistricts = Object.keys(districts).filter(district =>
          district.toLowerCase().includes(lowercasedSearch)
        );
        return (
          stateCode.toLowerCase().includes(lowercasedSearch) ||
          stateName.includes(lowercasedSearch) ||
          matchingDistricts.length > 0
        );
      });
      setFilteredData(Object.fromEntries(newData));
      setCurrentPage(1); // Reset to first page when search changes
    }
  }, [search, data]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const statesData = Object.entries(filteredData || {}).map(([stateCode, stateData]) => {
    const { total, delta } = stateData;
    return {
      stateCode,
      totalConfirmed: total?.confirmed || 0,
      totalDeaths: total?.deceased || 0,
      totalRecovered: total?.recovered || 0,
      newConfirmed: delta?.confirmed || 0,
      newDeaths: delta?.deceased || 0,
      newRecovered: delta?.recovered || 0
    };
  });

  const totalCases = statesData.reduce((acc, state) => acc + state.totalConfirmed, 0);
  const totalDeaths = statesData.reduce((acc, state) => acc + state.totalDeaths, 0);
  const totalRecovered = statesData.reduce((acc, state) => acc + state.totalRecovered, 0);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStates = statesData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(statesData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading...</p>
      </Container>
    );
  }

  if (!filteredData) {
    return <div>No data available</div>;
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4" style={{ color: '#3498db' }}>COVID-19 Updates</h1>
      <Row className="mb-4">
        <Col>
          <Card className="text-center card-soft card-soft-total-cases">
            <Card.Body>
              <FaViruses size={50} className="card-icon" />
              <Card.Title>Total Cases</Card.Title>
              <Card.Text>{totalCases}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center card-soft card-soft-total-deaths">
            <Card.Body>
              <FaSkullCrossbones size={50} className="card-icon" />
              <Card.Title>Total Deaths</Card.Title>
              <Card.Text>{totalDeaths}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center card-soft card-soft-total-recovered">
            <Card.Body>
              <FaHeartbeat size={50} className="card-icon" />
              <Card.Title>Total Recovered</Card.Title>
              <Card.Text>{totalRecovered}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Form className="mb-4">
        <div className="search-input-container">
          <FaSearch className="search-icon fs-2" />
          <Form.Control
            type="text"
            placeholder="Search by state or district..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input ps-5"
          />
        </div>
      </Form>
      <h2 className="mb-4 d-flex justify-content-between align-items-center" style={{ color: '#3498db' }}>
        State Statistics
        <FaSyncAlt
          size={20}
          className={`refresh-icon ${refreshing ? 'rotating' : ''}`}
          onClick={handleRefresh}
          title='Refresh data'
        />
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr className='th-head'>
            <th className='th-head'>State</th>
            <th className='th-head'>New Confirmed</th>
            <th className='th-head'>Total Confirmed</th>
            <th className='th-head'>New Deaths</th>
            <th className='th-head'>Total Deaths</th>
            <th className='th-head'>New Recovered</th>
            <th className='th-head'>Total Recovered</th>
          </tr>
        </thead>
        <tbody>
          {currentStates.map((state) => (
            <tr key={state.stateCode}>
              <td>{state.stateCode}</td>
              <td>{state.newConfirmed}</td>
              <td>{state.totalConfirmed}</td>
              <td>{state.newDeaths}</td>
              <td>{state.totalDeaths}</td>
              <td>{state.newRecovered}</td>
              <td>{state.totalRecovered}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination>
          {[...Array(totalPages).keys()].map((page) => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default CovidUpdate;
