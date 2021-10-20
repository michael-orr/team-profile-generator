class Team {
    
    constructor(teamName,missionStatement) {
        this.teamName = teamName;
        this.missionStatement = missionStatement;
    }
    getRole(){
        return "Team Info"
    }
}

module.exports = Team