import { Component } from 'react'
import { toast } from 'react-toastify';
import PropTypes from "prop-types"
import { Form, FormButton, Label, Input, Header} from './Searchbar.styled'
import { FcSearch } from "react-icons/fc"

export class Searchbar extends Component{

  static propTypes = {
    onSubmit:PropTypes.func.isRequired,
}

  state = { query: '' }
  onChange = event => {
    this.setState({ query: event.currentTarget.value})
  } 
  onSubmit = event => {
    event.preventDefault();

    if (!this.state.query.trim()) {
      return toast.warning('please type something');
    }

      this.props.onSubmit(this.state.query)
  }
  render() {
    return (
<Header>
        <Form onSubmit={this.onSubmit}>
          
    <FormButton type="submit">
        <Label>Search</Label>
        <FcSearch size={20}/>
    </FormButton>
    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.onChange}
          
      />
          
  </Form>
</Header>
    )
  }
}



