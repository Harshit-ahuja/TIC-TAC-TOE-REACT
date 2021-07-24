class App extends React.Component {
    state = {
        count : 0,
        isWinnerFound : false,
    }; 

    updateCount = () => {
        this.setState({count : this.state.count + 1});
    }

    reset = () => {
        this.setState(
            {
                count : 0, 
                isWinnerFound : false,
                winner : ""
            }
        )
    }
 
    checkWinner = () => {
        let allItems = document.querySelectorAll(".cell");
        if(this.state.count < 4) {
            return;
        } else {
            let infoArray = [];
            for(let i = 0; i < allItems.length; i++) {
                infoArray.push(allItems[i].innerHTML);
            }

            // Horizontal Check
            for(let i = 0; i < 9; i += 3) {
                if(infoArray[i] == infoArray[i+1] && infoArray[i+1] == infoArray[i+2] && infoArray[i] != "") {
                    this.setState({isWinnerFound : true});
                    alert(`GAME OVER. PLAYER ${infoArray[i]} WON THE GAME`);
                    return;
                }
            }

            // Vertical Check
            for(let i = 0; i < 3; i++) {
                if(infoArray[i] == infoArray[i+3] && infoArray[i+3] == infoArray[i+6] && infoArray[i] != "") {
                    this.setState({isWinnerFound : true});
                    alert(`GAME OVER. PLAYER ${infoArray[i]} WON THE GAME`);
                    return;
                }
            }

            // Diagonal Check
            for(let i = 0; i < 3; i += 2) {
                if(i == 0) {
                    if(infoArray[i] == infoArray[i+4] && infoArray[i+4] == infoArray[i+8] && infoArray[i] != "") {
                        this.setState({isWinnerFound : true});
                        alert(`GAME OVER. PLAYER ${infoArray[i]} WON THE GAME`);
                        return;
                    }
                } else if(i == 2) {
                    if(infoArray[i] == infoArray[i+2] && infoArray[i+2] == infoArray[i+4] && infoArray[i] != "") {
                        this.setState({isWinnerFound : true});
                        alert(`GAME OVER. PLAYER ${infoArray[i]} WON THE GAME`);
                        return;
                    }
                }
            }
        }

        if(this.state.count == 8) {
            alert("GAME DRAW");
        }
    }

    render() {
        return (
            <React.Fragment>
            <h1 className = "heading">TIC TAC TOE</h1>
            <div className = "container">
                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>
                
                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>

                <Cell clickCount = {this.state.count} 
                countUpdate = {this.updateCount} 
                checkWinnerHandler = {this.checkWinner}
                isWinnerFound = {this.state.isWinnerFound}/>
                
            </div>
            <Reset resetGameHandler = {this.reset}/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);