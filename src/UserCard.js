import React from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';


const UserCard = ({user}) => {
    return(
        <Card>
            <CardBody>
                <CardImg className='rounded-circle' width='100' height='250' src={user.picture?.large} />
                <CardText className='text-center fs-3 fw-bold text-primary'>{`NAME: ${user.name?.title} ${user.name?.first} ${user.name?.last}`}</CardText>
                <CardText className='text-center fs-5'>{`EMAIL: ${user.email}`}</CardText>
            </CardBody>
        </Card>
    );
};

export default UserCard;