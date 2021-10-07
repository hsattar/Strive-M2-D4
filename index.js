let playerNames = [ ]
let noOfTeams = 0
let assignPlayerClicks = 0
let teamNo = 0
let createTeamClicks = 0


let playersNameInput = document.getElementById('players-name-input')
let noOfTeamsInput = document.getElementById('no-of-teams-input')


// ADDING & DISPLAYING THE PLAYERS IN WAITING AREA

const addPlayerToArray = () => {
    if (playersNameInput.value === '') {
        alert('You Can\'t Add An Empty Name')
        return
    }
    playerNames.push(playersNameInput.value)
    playersNameInput.value = ''
    displayPlayersInWaitingArea()
}

const displayPlayersInWaitingArea = () => {
    let waitingListArea = document.getElementById('waiting-list')
    waitingListArea.innerHTML = ''
    for (let player of playerNames) {
        let item = document.createElement('li')
        item.innerHTML += player
        waitingListArea.appendChild(item)
    }
}


// CREATING THE TEAMS

const createTeamCheck = () => {
    if (createTeamClicks > 0) {
        let displayTeamsArea = document.getElementById('display-teams-area')
        displayTeamsArea.innerHTML = ''
    }
}

const createTeams =() => {
    createTeamCheck()
    createTeamClicks++
    noOfTeams = noOfTeamsInput.value
    noOfTeamsInput.value = ''
    let displayTeamsArea = document.getElementById('display-teams-area')
    for (let i = 1; i <= noOfTeams; i++) {
        let displayTeamDiv = document.createElement('div')
        displayTeamDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-2'
        displayTeamDiv.innerHTML = `
            <ul id="team${i}" class="list-group">
                <li class="list-group-item active">Team ${i}</li>
            </ul>`
        displayTeamsArea.appendChild(displayTeamDiv)
    }
}


// ASSIGN PLAYERS TO TEAMS

const assignPlayerToTeam = () => {
    assignPlayerClicks++
    if (assignPlayerClicks > noOfTeams) {
        assignPlayerClicks = 1
    }
    let randomPlayer = Math.floor(Math.random() * playerNames.length)
    let newMember = document.createElement('li')
    newMember.classList.add('list-group-item')
    newMember.innerText = playerNames[randomPlayer]
    let deleteBtn = document.createElement('i')
    deleteBtn.className = 'btn btn-danger bi bi-trash mx-2'
    newMember.appendChild(deleteBtn)
    playerNames.splice(randomPlayer, 1) 
    let chosenTeam = document.getElementById(`team${assignPlayerClicks}`)
    chosenTeam.appendChild(newMember)
    displayPlayersInWaitingArea()
    removePlayer(deleteBtn, newMember)
}

const assignAllPlayersToTeams = () => {
    for (let i = 0; i < playerNames.length; i++) {
        teamNo++
        if (teamNo > noOfTeams) {
            teamNo = 0
        }
        console.log(teamNo)
        console.log(playerNames)
        let randomPlayer = Math.floor(Math.random() * playerNames.length)
        let newMember = document.createElement('li')
        newMember.innerText = playerNames[randomPlayer]
        playerNames.splice(randomPlayer, 1)
        let chosenTeam = document.getElementById(`team${teamNo}`)
        chosenTeam.appendChild(newMember)
    }
    displayPlayersInWaitingArea()
}


// REMOVE PLAYER FROM A TEAM

const removePlayer = (e, playerName) => {
    e.addEventListener('click', () => {
        playerNames.push(playerName.innerText)
        playerName.remove()
        displayPlayersInWaitingArea()
    }) 
}


// BUTTON CLICK EVENT LISTENERS

let addPlayerName = document.getElementById('add-player-name')
let createNoOfTeams = document.getElementById('create-no-of-teams')
let assignPLayer = document.getElementById('assign-player')
let assignAll = document.getElementById('assign-all')

const triggerClickWithEnter = (input, btn) => {
    input.onkeyup = e => {
        if (e.keyCode === 13) {
            e.preventDefault()
            btn.click()
        }
    }
}

triggerClickWithEnter(playersNameInput, addPlayerName)
triggerClickWithEnter(noOfTeamsInput, createNoOfTeams)

addPlayerName.addEventListener('click', addPlayerToArray)
createNoOfTeams.addEventListener('click', createTeams)
assignPLayer.addEventListener('click', assignPlayerToTeam)
assignAll.addEventListener('click', assignAllPlayersToTeams)
