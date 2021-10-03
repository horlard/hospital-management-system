import React from 'react';

import styled from 'styled-components'
import {connect} from 'react-redux';


const CardFilters =(props)=> {
    console.log(props)
    const Wrapper = styled.div`
        width: 100%;
        padding: 15px;
        display: flex;
        justify-content:space-between;
        align-items: center;

    
    `

    const ShowEntries = styled.div`
    width: 20%;
        &>p {
            display: inline-block;
            margin-right:5px;
        }

        &>span {
            margin-left: 15px;
        }

        &>select {
            width: 20%;
            &:focus {
                outline: none;
            }
        }
    
    `

    const Search = styled.div`
        margin-right: 5%;
        &>p {
            display:inline-block;
            margin-right: 10px;
        }

        &>input {
            height: 18px;
            padding: 5px;
            border-radius: 3px;
            border: 1px solid #debebe;
            &:focus {
                outline:none;
            }
        }
    `

    const Tr= styled.tr`
        &>th {
            padding: 15px 46px 15px 20px;
            border-bottom: 1px solid #eee;
        }
        &>td {
            padding: 20px 24px 15px 26px;
            border-bottom: 1px solid #eee;
            text-align:left;
        }

        
    
    `

    const EditBtn = styled.td`
             border: 1px solid #3f00ff70;
             border-radius: 3px;
             background:#3f00ff70;
             color:#fff;
             margin-right:5%;
             cursor:pointer;
             padding: 8px 24px 8px 26px;
    
    
    `

    const DeleteBtn = styled.td`
             border: 1px solid #ff0000b8;
             border-radius: 3px;
             background:#ff0000b8;
             color:#fff;
             cursor:pointer;
             padding: 8px 24px 8px 26px;
    
    `

    const Div=styled.div`
        padding: 2% 0 5% 0;
    
    `
    console.log(props);

    const RecordList=()=> {
        if(props.title==='Patients') {
            return props.Patients.map(Patient=> {
                return (
                    <Tr>
                        <td>{Patient.firstName}</td>
                        <td>{Patient.lastName}</td>
                        <td>{Patient.insurance}</td>
                        <td>{Patient.address}</td>
                        <td>{Patient.phone}</td>
                        <EditBtn>Edit</EditBtn>
                        <DeleteBtn>Delete</DeleteBtn>
                    </Tr>
                )
            })
        } else if (props.title==='Doctors') {
            return props.Doctors.map(Doctor=> {
                return (
                    <Tr>
                        <td>{Doctor.firstName}</td>
                        <td>{Doctor.lastName}</td>
                        <td>{Doctor.address}</td>
                        <td>{Doctor.phone}</td>
                        <EditBtn>Edit</EditBtn>
                        <DeleteBtn>Delete</DeleteBtn>
                    </Tr>
                )
            })
        }
    }


    const TableHeader = () => {
         if(props.Patients.length === 0 && props.Doctors.length === 0 ) {
                return (
                    <></>
                )
            } else {
                return (
                    <Div>
                    <table>
                        <Tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            {
                                props.title==='Patients' ? <th>Insurance</th> : <></>
                            }   
                            <th>Address</th>
                            <th>Phone Number</th>
                        </Tr>
                            {RecordList()}
                    </table>
                    </Div>
                )
            }
    }
    
    return (
        <>
        <Wrapper>
            <ShowEntries>
                <p>Show</p>
                <select name="" id="">
                    <option value="">5</option>
                    <option value="">10</option>
                </select>
                <span>Entries</span>
            </ShowEntries>
            <Search>
                <p>Search : </p>
                <input type="text"/>

            </Search>
            
        </Wrapper>
            {
                TableHeader()
            }
        
        </>
    )
}

const mapStateToProps=state=> {
    return {
        Patients: state.Patients,
        Doctors: state.Doctors
    }
}

export default connect(mapStateToProps)(CardFilters);