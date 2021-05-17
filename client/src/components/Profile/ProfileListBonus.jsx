import React from 'react'
import dateFormat from 'dateformat'

export const ProfileListBonus = (props) => {

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
                <th scope="col">Date</th>
            </tr>
            </thead>
            <tbody>
            {props.bonuses.map((bonus, index) => {
                return <tr key={bonus.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{bonus.name}</td>
                    <td>{bonus.value}</td>
                    <td>{dateFormat(bonus.profile_bonus.createdAt, 'yyyy-mm-dd')}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}