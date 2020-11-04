import React from 'react';
import { Table } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import TableInfo from '../data/tableInfo';

const TableScreen = () => {
  const renderTableHeader = () => {
    let header = Object.keys(TableInfo[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderTableData = () => {
    return TableInfo.map((table, index) => {
      const {
        number,
        name,
        sku,
        weight,
        height,
        width,
        origin,
        minimum,
        delay,
      } = table; //destructuring
      return (
        <tr key={index}>
          <td>{number}</td>
          <td>{name}</td>
          <td>{sku}</td>
          <td>{weight}</td>
          <td>{height}</td>
          <td>{width}</td>
          <td>{origin}</td>
          <td>{minimum}</td>
          <td>{delay}</td>
        </tr>
      );
    });
  };

  return (
    <Row>
      <Col
        xs='12'
        md='12'
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Table responsive>
          <thead>
            <tr style={{ background: 'green', color: 'white' }}>
              {renderTableHeader()}
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default TableScreen;
