import React, { Component } from "react"
import { Layout, Card, Pagination,Input,Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from "axios"
const { Content} = Layout;
class Paginations extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [], // All data from API
      pageSize:4, // 4 Items on each pages
      currentPage:1, //default page
      currentData:[], // Data currently displayed on the screen which is only 4 datas
      offset:0 //offset for changing page
    }
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  handlePageClick = (page, size) => {
    // Handle Click whenever page is changed
    const selectedPage = page;
    const offset = (selectedPage-1) * this.state.pageSize;
    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadData()
    });

    };

    loadData() {
    //refresh the data each time page is changed
		const dataFetch = this.state.data;
		const currentFetch = dataFetch.slice(this.state.offset, this.state.offset + this.state.pageSize)
		this.setState({
			currentPage: Math.ceil(dataFetch.length / this.state.pageSize),
			currentData:currentFetch
		})

    }
  componentDidMount(){
    axios.get(`https://randomuser.me/api/?results=28`)
    .then(res => {
      // fetch all data from API
      var dataFetch = res.data.results.map(el=>{ return {
        firstname: el.name.first,
        lastname: el.name.last,
        telephone:el.phone,
        email:el.email,
        picture:el.picture.medium,
        birthday:el.dob.date,
        id:el.location.postcode
      }})
      // fetch only the necessary data for current page which only 4 datas
      var currentFetch=dataFetch.slice(this.state.offset,this.state.offset+this.state.pageSize)
      this.setState({
        data: dataFetch,
        currentData:currentFetch
      })

    })
    .catch(err=>err.message)
  }
  render(){
    return (
      <>
      <Content
        className="site-layout-background"
        style={{padding: 0,margin: 0,minHeight: 280}}
      >
      <div id="header">
          <div id="title"><span id="color" style={{fontSize:"1.5rem",fontWeight:"700"}}>PERSONNEL LIST</span><br/>List of all personnels</div>
          <div id="headerfunc">
            <div id="search" >
              <img src="https://img.icons8.com/ios/50/26e07f/search.png" style={{height:"1.2rem",marginLeft:"5px" }} alt=""/>
              <Input placeholder="Find Personnels" allowClear style={{border:"none", width:"100%"}}/>
            </div>
            <div id="add">
              <Button type="primary" style={{backgroundColor:"#06c7c1",border:"none",display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>ADD PERSONNELS<PlusOutlined /></Button>
            </div>

          </div>
      </div>
        <div className="container"style={{display: "flex"}}>
          { // mapping the necessary data for current page
            this.state.currentData.map((item,index)=>{
                return(
                    <Card key={index} className="card" hoverable="true" style={{display:"flex",margin:"10px",borderRadius:"20px"}} bodyStyle={{padding: "0px 10px 20px 10px"}}>
                      <label id="labelcolor" style={{marginTop:"10px"}}>
                        <span>Personnel ID:
                          <span id="color">
                            {item.id}
                          </span>
                        </span>
                        <div id="dot">
                          <div/><div/><div/>
                        </div>

                      </label>
                      <hr/>
                      <div className="container">
                        <div className="img">
                          <img  src={item.picture} alt=""/>
                        </div>
                        <div className="info">
                          <strong>Name:</strong>
                          <br/>
                          <label>{item.firstname} {item.lastname}</label>
                          <br/>
                          <strong>Telephone:</strong>
                          <br/>
                          <label>{item.telephone}</label>
                          <br display="desktopOnly"/>
                          <strong display="desktopOnly">Birthday:</strong>
                          <br display="desktopOnly"/>
                          <label display="desktopOnly">{item.birthday[8]}{item.birthday[9]}-{item.birthday[5]}{item.birthday[6]}</label>
                          <br display="desktopOnly"/>
                          <strong display="desktopOnly">Email:</strong>
                          <br display="desktopOnly"/>
                          <label display="desktopOnly">{item.email}</label>
                        </div>
                      </div>
                    </Card>
                )
            })
          }
        </div>
        <div style={{display: "flex",justifyContent:"center"}}><Pagination defaultCurrent={1} onChange={this.handlePageClick} total={this.state.data.length} defaultPageSize={this.state.pageSize}/></div>

        </Content>
      </>
    )
  }
}

export default Paginations
