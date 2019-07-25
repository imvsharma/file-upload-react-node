import React, {Component} from 'react';
import axios from 'axios';

export default class Fileupload extends Component {
    constructor () {
        super();
        this.state = {
            displayPic: '',
          };
    }

    onChange = (e) => {
        // event to update state when form inputs change
        switch (e.target.name) {
            case 'displayPic':
              this.setState({ displayPic: e.target.files[0] });
              break;
            default:
              this.setState({ [e.target.name]: e.target.value });
          }
      }

      onSubmit = (e) => {
          // event to submit the data to the server
        e.preventDefault();
        const {displayPic} =this.state;
        let formData = new FormData();

        formData.append('displayPic', displayPic);
        console.log('formData', formData);
        axios.post('http://localhost:3001/api/v1/user/create', formData,{
            'content-type': 'multipart/form-data'
        }).then(data => {
            console.log('data', data);
        }).catch(err => {
            console.log('err', err);
        })
      }

    render () {
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    type="file"
                    name="displayPic"
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        )
    }
}