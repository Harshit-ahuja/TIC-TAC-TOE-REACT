function Reset(props) {
    return (
        <button 
        className = "reset"
        onClick = {
            () => {
                let allItems = document.querySelectorAll(".cell");
                for(let i = 0; i < allItems.length; i++) {
                    allItems[i].innerHTML = "";
                }
                props.resetGameHandler();
            }} >
            RESET
        </button>
    )
}