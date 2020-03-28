import React from 'react'


const list = (props) => {

    return <div className="User">
            <table className="table1">
            {props.showdata.map(data => <tr key={data.id}>
                            <th><b>{data.name}</b></th>
                            <td><b>{data.gender}</b></td>
                            </tr>)}
                        </table>
                    </div>
}

export default list