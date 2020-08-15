export default  class UserTrip {
    constructor(id, userId, startStopId, endStopId, startTime, endTime, routeId){
        this.id = id;
        this.userId = userId;
        this.startStopId = startStopId;
        this.endStopId = endStopId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.routeId = routeId;
    }
}