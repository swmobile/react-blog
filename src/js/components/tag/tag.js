import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
// import { fetchIssuesIfNeeded } from '../../actions/index';
import fetchIssuesIfNeeded from '../../actions/index';
import ArticleList from './articlelist';
import TagCard from './tagcard';
import '../../../css/archive/archive.css';

class Tag extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIssuesIfNeeded());
  }
  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className="main">
        <div className="main-container">
          <Row>
            <Col xs={24} sm={24} md={18}><ArticleList issues={this.props.items} /></Col>
            <Col xs={0} sm={0} md={6}><TagCard issues={this.props.items} /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

Tag.defaultProps = {
  dispatch: null,
  isFetching: true,
  items: [],
};

Tag.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  items: PropTypes.array,
};

function mapStateToProps(state) {
  const { isFetching, items } = state || { isFetching: true, items: [] };
  return { isFetching, items };
}

export default connect(mapStateToProps)(Tag);
