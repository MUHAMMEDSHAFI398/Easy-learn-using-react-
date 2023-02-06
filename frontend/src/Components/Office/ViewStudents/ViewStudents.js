import React from 'react';
import './ViewStudents.css'
import {  CDBCardBody, CDBDataTable,  CDBContainer } from 'cdbreact';
import { Link} from "react-router-dom";

function ViewStudents() {
    function testClickEvent(param) {
        alert('Row Click Event');
    }

    const data = () => {
        return {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    },
                },
                {
                    label: 'Position',
                    field: 'position',
                    width: 270,
                },
                {
                    label: 'Office',
                    field: 'office',
                    width: 200,
                },
                {
                    label: 'Age',
                    field: 'age',
                    sort: 'asc',
                    width: 100,
                },
                {
                    label: 'Start date',
                    field: 'date',
                    sort: 'disabled',
                    width: 150,
                },
                {
                    label: 'Salary',
                    field: 'salary',
                    sort: 'disabled',
                    width: 100,
                },
            ],
            rows: [
                {
                    name: 'Tiger Nixon',
                    position: 'System Architect',
                    office: 'Edinburgh',
                    age: '61',
                    date: '2011/04/25',
                    salary: '$320',
                    clickEvent: () => testClickEvent(1),
                },
                {
                    name: 'Garrett Winters',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '63',
                    date: '2011/07/25',
                    salary: '$170',
                },
                {
                    name: 'Ashton Cox',
                    position: 'Junior Technical Author',
                    office: 'San Francisco',
                    age: '66',
                    date: '2009/01/12',
                    salary: '$86',
                },
                {
                    name: 'Cedric Kelly',
                    position: 'Senior Javascript Developer',
                    office: 'Edinburgh',
                    age: '22',
                    date: '2012/03/29',
                    salary: '$433',
                },
                {
                    name: 'Airi Satou',
                    position: 'Accountant',
                    office: 'Tokyo',
                    age: '33',
                    date: '2008/11/28',
                    salary: '$162',
                },
                {
                    name: 'Brielle Williamson',
                    position: 'Integration Specialist',
                    office: 'New York',
                    age: '61',
                    date: '2012/12/02',
                    salary: '$372',
                },



            ],
        };
    };
    return (
        <div>
            <div className='container'>
                <div className='buttonTop' >
                    <Link to="/office/add-student" >
                    <button className='buttonDiv ms-2'>Add Student</button>
                    </Link>
                </div>
                <div className="parentTable table-responsive mt-5">
                    <CDBContainer>
                        <div className='card' >
                            <CDBCardBody>
                                <CDBDataTable
                                    striped
                                    bordered
                                    hover
                                    scrollX
                                    scrollY
                                    maxHeight="300xp"
                                    data={data()}
                                    materialSearch
                                    fullPagination
                                    entriesOptions={[5, 10, 15, 20, 25]}
                                />
                            </CDBCardBody>
                        </div>
                    </CDBContainer>
                </div>
            </div>
        </div>
    )
}

export default ViewStudents















