import React ,{Component} from 'react';
import CardData from './Components/CardData';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {

  state = {
    apiData: {},
    cardArrayData:[]
  }

  

componentDidMount(){

  fetch('http://api-staging.aiesec.org/v2/opportunities?access_token=dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c')
  .then(res => res.json())
  .then((data) => {
    this.setState({ apiData: data })
    this.setState({ cardArrayData: data.data})
    console.log(this.state.apiData);
    console.log(this.state.cardArrayData);
  })
  .catch(console.log)

}

newMethod =(index,location,title) =>{
   console.log('In new Method')
   console.log(index);
   console.log(location);
   console.log(title);
   this.setState({
     cardArrayData:[
       ...this.state.cardArrayData.slice(0,index),
       {...this.state.cardArrayData[index],location,title},
       ...this.state.cardArrayData.slice(index+1)
     ]
   });
    

}

  render() {
    return (
      <CardData cardArrayData={this.state.cardArrayData} newMethod={this.newMethod}/>
  
    
    );
  }
}

export default App;
