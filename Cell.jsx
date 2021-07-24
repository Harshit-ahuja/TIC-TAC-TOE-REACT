function Cell(props) {
    return (
        <div className = "cell"
            onClick = { (e) => {
                if(!props.isWinnerFound) {
                    if(e.currentTarget.innerText == "") {
                        if(props.clickCount % 2 == 0) {
                            e.currentTarget.innerText = "0"
                        } else {
                            e.currentTarget.innerText = "X"
                        }
                        
                        props.countUpdate();
                        props.checkWinnerHandler();
                    }
                }  
            }}
        >
        </div>
    )
}