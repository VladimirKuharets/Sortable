import "./App.css";

function DB(props) {

  function sort(index) {
    return function (e) {
      const tbl = document.querySelector('table');
      let sortedRows = Array.from(tbl.rows)
      .slice(1) 
      .sort((rowA, rowB) => rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1);
      tbl.append(...sortedRows);
    }
  }

    return (
    <div className="content" >
      <table>
        <tbody>
          <tr>
            {
              Object.keys(props.UserList[0])
                .map((item,index)=>{
                  return <td key={item} onClick={sort(index)}>{item}</td>
                })
            }
          </tr>
        
        {
          props.UserList.map((item,index) =>{
            return(<tr key={item + index}>
                <td>{item.Firstnames}</td>
                <td>{item.Lastnames}</td>
                <td>{item['Give money']}</td>
                <td>{item['Get money']}</td>
            </tr>)
          })
        }
        </tbody>
      </table>
    </div>
    )
}

export default DB;

