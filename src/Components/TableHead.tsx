const TableHead = ({items} :{items :string[]}) => {
    return (
        <thead>
            <tr>
                {
                    items.map(item => (
                        <th scope="col" className="text-capitalize" key={item}>{item}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default TableHead;