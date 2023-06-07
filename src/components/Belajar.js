import React  from 'react'
import Tombol from './Tombol';
import style from"./Belajar.module.css";

class Belajar extends React.Component {
    constructor(props){
        super(props);
        this.state = {judul: "React"}
    }

    componentDidMount(){
        console.log("judul diubah menjadi:", this.state.judul)
    }

    componentDidUpdate(){
        console.log("judul diubah menjadi:", this.state.judul)
    }

    handleTombolclick = (judul) => {
        this.setState({judul:judul});
    }

    render(){
        return(
            <>
                <div>
                    <h1 className={style.judul}>Belajar {this.state.judul}</h1>
                    <Tombol onTombolClick={this.handleTombolclick}>React</Tombol>
                    <Tombol onTombolClick={this.handleTombolclick}>JavaScript</Tombol>
                </div>
            </>
        )
    }
}

export default Belajar;