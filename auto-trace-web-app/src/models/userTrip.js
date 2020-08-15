export default  class UserTrip {
    constructor(id, userId, startStopId, endStopId, startTime, endTime, routeTime){
        this.id = id;
        this.userId = userId;
        this.startStopId = startStopId;
        this.endStopId = endStopId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.routeTime = routeTime;
    }
}