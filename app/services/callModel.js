var oContext = {};
oContext.screenModel = {
        calltype: 'T1',
        partner: null,
        altpartner: null,
        site: null,
        building: null,
        bupriority: null,
        floor: null,
        room: null,
        servicecode: null,
        priority: null,
        nodekey: '',
        nodetype: '',
        effect: '',
		department: '',
        question: '',
        shorttext: null,
        longtext: null,
        feedback: ' ',
        notification: "0"
};
oContext.oModelOut = {
        gAltPartner: null,
        gDept: null,
        gEffect: null,
        gFloor: null,
        gPartner: null,
        gRoom: null,
        gRouting: null,
        gSource: null,
        gTkombuildclass: null,
        gTplnr: null,
        gTxt: null,
        gZpriority: null,
        longText: null,
        gQmnumr: null,
        type: ' ',
        ID: null,
        number: null,
        message: null
};
oContext.aData =
             [{
                 SiteCode: "1",
                 SiteName: "Use Filter first"
             }];

oContext.NodeData = [];
oContext.NodeQues = [];
oContext.QuesRank = [];
oContext.Questions = [];
oContext.ServiceListarray = [];

oContext.initRefdata = function () {
    $.ajax({
        url: '../api/SlaData',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            dataLoaded('NODES', data);
        }
    });
    $.ajax({
        url: '../api/QuesData',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            dataLoaded('SLA', data);
           
        }
    });
}

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({ modelData: oContext.aData });
var oModelServices = new sap.ui.model.json.JSONModel();

function dataLoaded(servType,data) {
    if (servType == 'NODES') {
        oContext.NodeData = data.ServicesList;
        buildSearch(oContext.NodeData, oContext.ServiceListarray);
        oModelServices.setData({ services: oContext.ServiceListarray });
    } else if (servType == 'SLA') {
        oContext.NodeQues = data.NodeQuesList;
        oContext.QuesRank = data.QuesRankList;
        oContext.Questions = data.QuestionsList;
    }
}


function buildSearch(NodeArray, ServiceListarray) {

    for (x = 0, len = NodeArray.length; x < len ; x++) {
        if (NodeArray[x].Parent == 'ROOT') {
            buildsearchstr(NodeArray[x].NodeCode, NodeArray, x, 0, ServiceListarray);
        }
    }
}

// Note the use of Recursive calls to build the string from a ragged hierarchy
function buildsearchstr(fullstr, NodeArray, ndex, level, ServiceListarray) {
    var thisnode = NodeArray[ndex];
    var nextlevel = level + 1;
    var xflag = 'x';
    for (var ydex = 0, ylen = NodeArray.length ; ydex < ylen ; ydex++) {
        if (NodeArray[ydex].Parent == thisnode.NodeKey) {
            var outcode = NodeArray[ydex].NodeKey;
            var outstring = fullstr + '~' + NodeArray[ydex].NodeCode;
            var outstr = buildsearchstr(outstring, NodeArray, ydex, nextlevel);
            if (outstr == undefined) {
                ServiceListarray.push(({
                    "searchfield": outstring,
                    "NodeKey": outcode,
                    "NodeCode": NodeArray[ydex].NodeCode,
                    "Routing": NodeArray[ydex].Routing,
                    "Type": NodeArray[ydex].Type,
                    "Effect": NodeArray[ydex].Effect,
                    "Department": NodeArray[ydex].Department
                }));

            }
        }
    } return outstring;
}


var oModelRefData = {};
var oModelRefNotif = {};




//    Go get the Reference lookup data

function buildServicedata() {
  
    oModelRefData = {};
    $('#panelstep12').html('<strong><i>Loading Data...</i></strong>');
    $('#panelstep1').html('<strong><i>Loading Data...</i></strong>');
    BuildUI();
    return;
    $.ajax({
        url: '../api/Refdata',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            oModelRefData = data;
            buildNotifdata();
        }
    });
}
function buildNotifdata() {
    oModelRefNotif = {};
    $.ajax({
        url: '../api/RefNotif',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            oModelRefNotif = data;
            if ($("#PartnerId").length == 0) {
                BuildUI(); //it doesn't exist
            }
        }
    });
}

function validateCallData(calllog) {

    if ($('#DivDropDown-input').val() == 'Select a Division')
    { $('#target').val('Error -> Select a Division....'); }
    else if (calllog.gTplnr.length < 12)
    { $('#target').val('Error -> Select a Building....'); }
    else if (calllog.longText.length < 2)
    { $('#target').val('Error -> Enter a Long Text!'); }
    else if (calllog.gTxt.length > 2 && calllog.longText.length > 2) {
        if (typeof calllog.GRroom == 'undefined' || calllog.GRoom == "") { calllog.GRoom = "n/a"; }
        if (typeof calllog.GPartner == 'undefined') { calllog.GPartner = '1'; }
        $('#target').val('sending....');
        return true;
    }
    else { $('#target').text('Error -> Fill in Description and Short Text!'); }
    return false;


}


function createPreCall() {
 
    oContext.oModelOut.gAltPartner = oContext.screenModel.altpartner;
    oContext.oModelOut.gDept = oContext.oModelOut.gDept,
    oContext.oModelOut.gEffect =  oContext.oModelOut.gEffect;
    oContext.oModelOut.gFloor =  $('#FloorId-input').val() + '*' + oContext.oModelOut.type.substring(0, 1);
    oContext.oModelOut.gPartner =  oContext.screenModel.partner;
    oContext.oModelOut.gRoom =  $('#RoomId').val();
    oContext.oModelOut.gRouting =  oContext.oModelOut.gRouting;
    oContext.oModelOut.gSource =  'Web' + '~' + oContext.oModelOut.gSource;
    oContext.oModelOut.gTkombuildclass = oContext.oModelOut.gTkombuildclass;
    oContext.oModelOut.gTplnr =  '6000-' + $("#oSiteEVSId-input").val() + '-' + $("#oBuildingEVSId-input").val();
    oContext.oModelOut.gTxt = $('#shorttext').val();
    oContext.oModelOut.gZpriority =  oContext.oModelOut.gZpriority;
    oContext.oModelOut.longText =  $('#longtext').val();
    oContext.oModelOut.gQmnumr =  null;
    oContext.oModelOut.type =  null;
    oContext.oModelOut.ID =  null;
    oContext.oModelOut.number =  null;
    oContext.oModelOut.message = null;

    
}


function placeCall(calllog) {
    createPreCall();
    if (validateCallData(calllog)) {

        $.ajax({
            url: '../api/CallLog',
            type: 'post',
            dataType: 'json',
            success: function (data) {
                $('#target').val(data.Feedback);
                calllog.gQmnumr = data.gQmnumr;
                calllog.message = data.message;
                var oCreateDialog = new sap.ui.commons.Dialog();
                oCreateDialog.setTitle("Call has been Created!");
                var oSimpleForm = new sap.ui.layout.form.SimpleForm({
                    maxContainerCols: 2,
                    content: [
                        new sap.ui.commons.Label({ text: "Notification" }),
                        new sap.ui.commons.TextField({ value: calllog.gQmnumr }),
                        new sap.ui.commons.Label({ text: "Request by" }),
                        new sap.ui.commons.TextField({ value: calllog.gPartner }),
                        new sap.ui.commons.Label({ text: "Short Text" }),
                        new sap.ui.commons.TextField({ value: calllog.gTxt }),
                        new sap.ui.commons.Label({ text: "Description" }),
                        new sap.ui.commons.TextArea({ value: calllog.longText }),
                        new sap.ui.commons.Label({ text: "Building" }),
                        new sap.ui.commons.TextField({ value: calllog.gTplnr }),
                        new sap.ui.commons.Label({ text: "Floor" }),
                        new sap.ui.commons.TextField({ value: calllog.gFloor }),
                        new sap.ui.commons.Label({ text: "Room" }),
                        new sap.ui.commons.TextField({ value: calllog.gRoom }),
                        new sap.ui.commons.Label({ text: "Acknowledge By" }),
                        new sap.ui.commons.TextField({ value: calllog.message })

                    ]
                });
                oCreateDialog.addContent(oSimpleForm);
                oCreateDialog.addButton(
                    new sap.ui.commons.Button({
                        text: "OK",
                        press: function () {
                            window.location.replace('Index');
                            oCreateDialog.close();
                        }
                    }
                ));
                $('#target').text(" ");
                oCreateDialog.open();

            },
            error: function (data) {
                $('#target').text("Oops!");
            },
            data: calllog
        });

    }

}

function getSearchHelpList(searchcode,searchname,searchtype,successfn,errorfn) {
              
               var oSitename = searchcode;
               var oSitename = searchname;
                        
    $.ajax({
                   url: '../api/SiteList?' + 'SiteCode=' + oSitecode + '&Sitename=' + oSitename ,
                   type: 'get',
                   dataType: 'json',
                   success: successfn,
                   error: errorfn
               })
           };
var successexample = function (data) {
                       for (var x = 0, len = data.SiteList.length ; x < len ; x++) {
                           if (data.SiteList[x].SiteCode == oBuildingNo ) {
                               oContext.oModelOut.BUPriority = data.SiteList[x].Priority;
                               oContext.oModelOut.gTkombuildclass = data.SiteList[x].Priority;
                               $('#oBUPrior').text("BU_Priority:" + data.SiteList[x].Priority);
                               break;
                           }
                       }
                   }
