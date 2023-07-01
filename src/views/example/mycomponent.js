import React from "react";
import Childcomponent from "./Childcomponent";
import Addcomponent from "./Addcomponent";
class MyComponent extends React.Component {
  //   /*
  // JSX => return block
  // đóng mở ngoặc console.log
  // nguyên tắc reactjs phải bọc div to cho các div nhỏ
  // dùng className
  // Dùng <React.Fragment></React.Fragment> để bọc các div
  // <React.Fragment></React.Fragment> thành <></>
  // <state : bọ nhớ react lưu lại>

  // */
  //   /*
  // react developer tools chrome: xem trạng thái, thay đổi react
  // */
  //   /*
  // cập nhập state. thay đổi state
  // this.setState({
  //       name: event.target.value,
  //       */

  // re-render
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Deverloper", salary: "500 " },
      { id: "abcJob2", title: "Testers", salary: "400 " },
      { id: "abcJob3", title: "Project managers", salary: "1000 " },
    ],
  };
  addNewJob = (job) => {
    console.log("check job from parent: ', job");
    // let curenJobs = this.state.arrJobs;
    // curenJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: curenJobs,
    });
  };
  deleteAJob = (job) => {
    let curenJobs = this.state.arrJobs;
    curenJobs = curenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: curenJobs,
    });
  };
  componentDidUpdate(prevProps, prevSate) {
    console.log(
      ">> run didupdate: ",
      "prev state: ",
      prevSate,
      "current state: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>> run component did mount");
  }
  render() {
    console.log(" >>> call render: ", this.state);
    return (
      <>
        <Addcomponent addNewJob={this.addNewJob} />

        <Childcomponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
