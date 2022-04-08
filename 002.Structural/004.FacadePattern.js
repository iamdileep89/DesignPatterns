/*
It is widely used in JS
It is used to provide a unified, simpler and public-facing interface for ease of use by consumer
It internally handles all the complex functionalities and keeps the consumer away from all these subclasses or subsystems stuff
*/

class Complaints {
    constructor(){
        this.complaints = []
    }

    addComplaint(complaint){
        this.complaints.push(complaint)
        return this.replyMessage(complaint)
    }

    getComplaint(id){
        return this.complaints.find(complaint => complaint.id === id)
    }

    replyMessage(complaint){}
}

// SingleTon Class
class ProductComplaints extends Complaints {
    constructor(){
        super();
        if(ProductComplaints.exists){
            return ProductComplaints.instance
        }
        ProductComplaints.exists = true
        ProductComplaints.instance = this;
        return this;
    }
    replyMessage(complaint){
        return `Complaint No. ${complaint.id} reported by ${complaint.customer} regarding ${complaint.details} have been filed with Product Department.`
    }
}

// SingleTon class
class ServiceComplaints  extends Complaints{
    constructor(){
        super();
        if(ServiceComplaints.exists){
            return ServiceComplaints.instance
        }
        ServiceComplaints.exists = true
        ServiceComplaints.instance = this;
        return this;
    }
    replyMessage(complaint){
        return `Complaint No. ${complaint.id} reported by ${complaint.customer} regarding ${complaint.details} have been filed with Service Department.`
    }
}

let currentId = 0
// Complaint Registry - Publicly given interface
class ComplaintRegistry {
    registerComplaint(customer, type, details){
        const id = ComplaintRegistry._uniqueIdGenerator();
        let registry;
        if( type == 'service'){
            registry = new ServiceComplaints()
        } else {
            registry = new ProductComplaints()
        }
        return registry.addComplaint({id, customer, details})
    }
    //static method
    static _uniqueIdGenerator(){
        return ++currentId
    }
}


// Usage of Facade Pattern

const registry = new ComplaintRegistry();
const reportService = registry.registerComplaint('Maratha', 'service', 'availability');
console.log(reportService);

const reportProduct = registry.registerComplaint('Jane', 'product', 'faded color');
console.log(reportProduct);