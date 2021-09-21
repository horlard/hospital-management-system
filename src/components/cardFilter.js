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

        &>td:nth-child(6) {
             border: 1px solid #3f00ff70;
             border-radius: 3px;
             background:#3f00ff70;
             color:#fff;
             margin-right:5%;
             cursor:pointer;
             padding: 8px 24px 8px 26px;
        }

        &>td:nth-child(7) {
             border: 1px solid #ff0000b8;
             border-radius: 3px;
             background:#ff0000b8;
             color:#fff;
             cursor:pointer;
             padding: 8px 24px 8px 26px;
        }
    
    `

    const Div=styled.div`
        padding: 2% 0 5% 0;
    
    `
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
        <Div>
        <table>
        <Tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Insurance</th>
            <th>Address</th>
            <th>Phone Number</th>
        </Tr>
        {
            props.Patients.map(Patient=> {
                return (
                    <Tr>
                        <td>{Patient.FirstName}</td>
                        <td>{Patient.LastName}</td>
                        <td>{Patient.Insurance}</td>
                        <td>{Patient.Address}</td>
                        <td>{Patient.PhoneNumber}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </Tr>
                )
            })
        }
        </table>
        </Div>
        
        </>
    )
}

const mapStateToProps=state=> {
    return {
        Patients: state.Patients
    }
}

export default connect(mapStateToProps)(CardFilters);