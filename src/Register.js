import React from 'react';

const initState={
    username:'',
    email:'',
    password:''
}

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ...initState
        }
    }
    changeHanlder = event =>{
        console.log(event)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault();
        let config = {
            method:'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(this.state)
        }
        fetch('https://reactcourseapi.herokuapp.com/user/register', config)
            .then(res => res.json())
            .then(data =>{
                localStorage.setItem('token', data.token)
                this.setState({...initState})   
            })
            .catch(err =>{
                console.log(err)
            })
    }

    render() {
        return (
             <> {/* Esto es un fragmento! omg*/}
                <h1>Formulario de registro!</h1>
                <form>
                    <label >Username:
                        <input type='text' id='username' value={this.state.username} onChange={this.changeHanlder}/>
                    </label>
                    <label >Email:
                        <input type='email' id='email' value={this.state.email} onChange={this.changeHanlder}/>
                    </label>
                    <label >Password:
                        <input type='password' id='password' value={this.state.password} onChange={this.changeHanlder}/>
                    </label>
                    <button type='submit'>Enviar!</button>
                    
                </form>
            </>
        );
    }

}