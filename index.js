let playerNames = [ ]
let noOfTeams = 0

let playersNameInput = document.getElementById('players-name-input')
let addPlayerName = document.getElementById('add-player-name')
let noOfTeamsInput = document.getElementById('no-of-teams-input')
let createNoOfTeams = document.getElementById('create-no-of-teams')


// ADDING & DISPLAYING THE PLAYERS IN WAITING AREA

const displayPlayerInWaitingArea = () => {
    let waitingListArea = document.getElementById('waiting-list')
    waitingListArea.innerHTML = ''
    for (player of playerNames) {
        let item = document.createElement('li')
        item.innerHTML += player
        waitingListArea.appendChild(item)
    }
}


const addPlayerToArray = () => {
    playerNames.push(playersNameInput.value)
    playersNameInput.value = ''
    displayPlayerInWaitingArea()
}


// CREATING THE TEAMS

const createTeams =() => {
    noOfTeams = noOfTeamsInput.value
    noOfTeamsInput.value = ''
    let displayTeamsArea = document.getElementById('display-teams-area')
    for (let i = 1; i <= noOfTeams; i++) {
        let displayTeamDiv = document.createElement('div')
        displayTeamDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2'
        displayTeamDiv.innerHTML = `
            <ul class="list-group">
                <li class="list-group-item active">Team ${i}</li>
            </ul>`
        displayTeamsArea.appendChild(displayTeamDiv)
    }
}

// BUTTON CLICK EVENT LISTENERS

const triggerClickWithEnter = (input, btn) => {
    input.onkeyup = e => {
        if (e.keyCode === 13) {
            e.preventDefault()
            btn.click()
        }
    }
}

triggerClickWithEnter(playersNameInput, addPlayerName)
triggerClickWithEnter(playersNameInput, addPlayerName)

addPlayerName.addEventListener('click', addPlayerToArray)
createNoOfTeams.addEventListener('click', createTeams)
