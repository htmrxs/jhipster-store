import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './product-order.reducer';
import { IProductOrder } from 'app/shared/model/product-order.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IProductOrderDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ProductOrderDetail = (props: IProductOrderDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { productOrderEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          ProductOrder [<b>{productOrderEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="placedDate">Placed Date</span>
          </dt>
          <dd>
            {productOrderEntity.placedDate ? (
              <TextFormat value={productOrderEntity.placedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="status">Status</span>
          </dt>
          <dd>{productOrderEntity.status}</dd>
          <dt>
            <span id="code">Code</span>
          </dt>
          <dd>{productOrderEntity.code}</dd>
          <dt>
            <span id="invoiceId">Invoice Id</span>
          </dt>
          <dd>{productOrderEntity.invoiceId}</dd>
          <dt>Customer</dt>
          <dd>{productOrderEntity.customer ? productOrderEntity.customer.email : ''}</dd>
        </dl>
        <Button tag={Link} to="/product-order" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product-order/${productOrderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ productOrder }: IRootState) => ({
  productOrderEntity: productOrder.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProductOrderDetail);
