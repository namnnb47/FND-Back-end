import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './article.reducer';
import { IArticle } from 'app/shared/model/article.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IArticleUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const ArticleUpdate = (props: IArticleUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { articleEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/article' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...articleEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="dfnadminApp.article.home.createOrEditLabel">Create or edit a Article</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : articleEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="article-id">ID</Label>
                  <AvInput id="article-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="titleLabel" for="article-title">
                  Title
                </Label>
                <AvField id="article-title" type="text" name="title" />
              </AvGroup>
              <AvGroup>
                <Label id="textLabel" for="article-text">
                  Text
                </Label>
                <AvField id="article-text" type="text" name="text" />
              </AvGroup>
              <AvGroup>
                <Label id="dateCreatedLabel" for="article-dateCreated">
                  Date Created
                </Label>
                <AvField id="article-dateCreated" type="text" name="dateCreated" />
              </AvGroup>
              <AvGroup>
                <Label id="articleStatusLabel" for="article-articleStatus">
                  Article Status
                </Label>
                <AvField id="article-articleStatus" type="text" name="articleStatus" />
              </AvGroup>
              <AvGroup>
                <Label id="labelLabel" for="article-label">
                  Label
                </Label>
                <AvField id="article-label" type="text" name="label" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/article" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  articleEntity: storeState.article.entity,
  loading: storeState.article.loading,
  updating: storeState.article.updating,
  updateSuccess: storeState.article.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ArticleUpdate);
