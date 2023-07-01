import React from "react";
import "./demo.css";
class Childcomponent extends React.Component {
  /*
JSX => return block
đóng mở ngoặc console.log
nguyên tắc reactjs phải bọc div to cho các div nhỏ
dùng className
Dùng <React.Fragment></React.Fragment> để bọc các div
<React.Fragment></React.Fragment> thành <></>
<state : bọ nhớ react lưu lại>

*/
  /*
react developer tools chrome: xem trạng thái, thay đổi react
*/
  /*
cập nhập state. thay đổi state
this.setState({
      name: event.target.value,
      */

  // re-render
  state = {
    showJobs: false,
  };
  handleShowHide = (status) => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnClickDelete = (job) => {
    console.log(" >>> handleOnClickDelete: ", job);
    this.props.deleteAJob(job);
  };
  render() {
    // let name = this.props.name;
    //let age = this.props.age;
    // key:value
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>> check conditional:", check);

    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="Job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.Id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span onClick={() => this.handleOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

{
  /* const Childcomponent = (props) => {
  let { arrJobs } = props;

  return (
    <>
      <div className="Job-lists">
        {arrJobs.map((item, index) => {
          if (item.salary >= 500) {
          }
          return (
            <div key={item.Id}>
              {+item.title} - {item.salary} $
            </div>
          );
        })}
      </div>
    </>
  );
} */
}

export default Childcomponent;
