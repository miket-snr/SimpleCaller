(function() {
    var dataFactory = function($http) {
    
        var factory = {};
            factory.nodeData = getNodeData() ;
            factory.locationData = getLocationData() ;
            factory.divisionData = getDivisionData() ;
            factory.mobi = true ;
            factory.screenModel = {
                calltype: 'T1',
                division: 'Please Select ',
                adminStatus: false ,
                partner: '66011',
                altpartner: '66011',
                locationStatus: false,
                site: '0',
                sitename:'',
                building: '00',
                bupriority: 'P5',
                floor: 'Outside',
                room: 'n/a',
                servicecode: '',
                serviceStatus: false,
                priority: '',
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
                factory.getsiteList = function(siteCode,siteName) {
            return $http.get('/customers/' + customerId);
        };
        factory.getsiteList.error
                factory.getbuildingList = function(siteCode) {
            return $http.get('/customers/' + customerId);
        };
                 
    function getNodeData(){
            return [{"searchfield":"Cooling~Repair/Service~Air-Conditioning~Equipment Cooling","NodeKey":"A010101","NodeCode":"Equipment Cooling","Routing":"W621","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Repair/Service~Air-Conditioning~Central System","NodeKey":"A010102","NodeCode":"Central System","Routing":"W621","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Repair/Service~Air-Conditioning~Individual Unit (Wall Unit)","NodeKey":"A010103","NodeCode":"Individual Unit (Wall Unit)","Routing":"W621","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Repair/Service~Ventilation systems","NodeKey":"A0102","NodeCode":"Ventilation systems","Routing":"W621","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Repair/Service~Refrigeration Unit","NodeKey":"A0103","NodeCode":"Refrigeration Unit","Routing":"W621","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Repair/Service~Tridium Identified~BMSI to Investigate","NodeKey":"A010401","NodeCode":"BMSI to Investigate","Routing":"BMSI","Type":null,"Effect":"2","Department":"BMSI"},{"searchfield":"Cooling~Repair/Service~Tridium Identified~Repair Cooling Equipment","NodeKey":"A010402","NodeCode":"Repair Cooling Equipment","Routing":"W621","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Install/Move","NodeKey":"A02","NodeCode":"Install/Move","Routing":"W626","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~TBI","NodeKey":"A03","NodeCode":"TBI","Routing":"W627","Type":null,"Effect":"2","Department":"Operations"},{"searchfield":"Cooling~Approval~Approve Co-User Application","NodeKey":"A0401","NodeCode":"Approve Co-User Application","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~Approval~Approve WAP","NodeKey":"A0402","NodeCode":"Approve WAP","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~Audit/Investigate~Special Investigation","NodeKey":"A0501","NodeCode":"Special Investigation","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~Audit/Investigate~Investigate Failure","NodeKey":"A0502","NodeCode":"Investigate Failure","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~Audit/Investigate~Perform Site Audit","NodeKey":"A0503","NodeCode":"Perform Site Audit","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~Audit/Investigate~Perform Risk Assessment","NodeKey":"A0504","NodeCode":"Perform Risk Assessment","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~Instructions~Supply Operating Instructions","NodeKey":"A0601","NodeCode":"Supply Operating Instructions","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~TFMC Processes~Assist TFMC Operational Staff with probl","NodeKey":"A0701","NodeCode":"Assist TFMC Operational Staff with probl","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~TFMC Processes~Repair RMS System","NodeKey":"A0702","NodeCode":"Repair RMS System","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~TFMC Processes~Assist with Project","NodeKey":"A0703","NodeCode":"Assist with Project","Routing":"W624","Type":null,"Effect":"2","Department":"Engineering"},{"searchfield":"Cooling~General FM Request","NodeKey":"A08","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"2","Department":"Facilities Management"},{"searchfield":"Cooling~Landlord Responsibility","NodeKey":"A09","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"2","Department":"Facilities Management"},{"searchfield":"Energy~Repair/Service~Power Failure","NodeKey":"B0101","NodeCode":"Power Failure","Routing":"BCC","Type":null,"Effect":"1","Department":"BCC"},{"searchfield":"Energy~Repair/Service~Main Supply~AC Power Failure","NodeKey":"B010201","NodeCode":"AC Power Failure","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Main Supply~DC Power Failure with Solar Panel","NodeKey":"B010202","NodeCode":"DC Power Failure with Solar Panel","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Electrical~Plugs","NodeKey":"B010301","NodeCode":"Plugs","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Electrical~DB Boards","NodeKey":"B010302","NodeCode":"DB Boards","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Electrical~Safety","NodeKey":"B010303","NodeCode":"Safety","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Standby Power~Fixed Generator","NodeKey":"B010401","NodeCode":"Fixed Generator","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Standby Power~Mobile Generator","NodeKey":"B010402","NodeCode":"Mobile Generator","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Uninterrupted power supply","NodeKey":"B0105","NodeCode":"Uninterrupted power supply","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Lighting~Normal Lighting (Bulbs)","NodeKey":"B010601","NodeCode":"Normal Lighting (Bulbs)","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Lighting~Emergency Lighting","NodeKey":"B010602","NodeCode":"Emergency Lighting","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Lighting~Security Lighting","NodeKey":"B010603","NodeCode":"Security Lighting","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Lighting~Aircraft Warning Lights","NodeKey":"B010604","NodeCode":"Aircraft Warning Lights","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Repair/Service~Tridium Identified~BMSI to Investigate","NodeKey":"B010701","NodeCode":"BMSI to Investigate","Routing":"BMSI","Type":null,"Effect":"1","Department":"BMSI"},{"searchfield":"Energy~Repair/Service~Tridium Identified~Repair Energy Equipment","NodeKey":"B010702","NodeCode":"Repair Energy Equipment","Routing":"W621","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Install/Move","NodeKey":"B02","NodeCode":"Install/Move","Routing":"W626","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~TBI","NodeKey":"B03","NodeCode":"TBI","Routing":"W627","Type":null,"Effect":"1","Department":"Operations"},{"searchfield":"Energy~Approval~Approve Co-User Application","NodeKey":"B0401","NodeCode":"Approve Co-User Application","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~Approval~Approve WAP","NodeKey":"B0402","NodeCode":"Approve WAP","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~Audit/Investigate~Special Investigation","NodeKey":"B0501","NodeCode":"Special Investigation","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~Audit/Investigate~Investigate Failure","NodeKey":"B0502","NodeCode":"Investigate Failure","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~Audit/Investigate~Perform Site Audit","NodeKey":"B0503","NodeCode":"Perform Site Audit","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~Audit/Investigate~Perform Risk Assessment","NodeKey":"B0504","NodeCode":"Perform Risk Assessment","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~Instructions~Supply Operating Instructions","NodeKey":"B0601","NodeCode":"Supply Operating Instructions","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~TFMC Processes~Assist TFMC Operational Staff with probl","NodeKey":"B0701","NodeCode":"Assist TFMC Operational Staff with probl","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~TFMC Processes~Repair RMS System","NodeKey":"B0702","NodeCode":"Repair RMS System","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~TFMC Processes~Assist with Project","NodeKey":"B0703","NodeCode":"Assist with Project","Routing":"W624","Type":null,"Effect":"1","Department":"Engineering"},{"searchfield":"Energy~General FM Request","NodeKey":"B08","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"1","Department":"Facilities Management"},{"searchfield":"Energy~Landlord Responsibility","NodeKey":"B09","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"1","Department":"Facilities Management"},{"searchfield":"Fire~Repair/Service~Fire Equipment Incident","NodeKey":"C0101","NodeCode":"Fire Equipment Incident","Routing":"W621","Type":null,"Effect":"3","Department":"Operations"},{"searchfield":"Fire~Repair/Service~Tridium Identified~BMSI to Investigate","NodeKey":"C010201","NodeCode":"BMSI to Investigate","Routing":"BMSI","Type":null,"Effect":"3","Department":"BMSI"},{"searchfield":"Fire~Repair/Service~Tridium Identified~Repair Fire Equipment","NodeKey":"C010202","NodeCode":"Repair Fire Equipment","Routing":"W621","Type":null,"Effect":"3","Department":"Operations"},{"searchfield":"Fire~Install/Move","NodeKey":"C02","NodeCode":"Install/Move","Routing":"W626","Type":null,"Effect":"3","Department":"Operations"}
,{"searchfield":"Fire~TBI","NodeKey":"C03","NodeCode":"TBI","Routing":"W627","Type":null,"Effect":"3","Department":"Operations"},{"searchfield":"Fire~Instructions~Supply Operating Instructions","NodeKey":"C0401","NodeCode":"Supply Operating Instructions","Routing":"W624","Type":null,"Effect":"3","Department":"Engineering"},{"searchfield":"Fire~TFMC Processes~Assist TFMC Operational Staff with probl","NodeKey":"C0501","NodeCode":"Assist TFMC Operational Staff with probl","Routing":"W624","Type":null,"Effect":"3","Department":"Engineering"},{"searchfield":"Fire~TFMC Processes~Repair RMS System","NodeKey":"C0502","NodeCode":"Repair RMS System","Routing":"W624","Type":null,"Effect":"3","Department":"Engineering"},{"searchfield":"Fire~TFMC Processes~Assist with Project","NodeKey":"C0503","NodeCode":"Assist with Project","Routing":"W624","Type":null,"Effect":"3","Department":"Engineering"},{"searchfield":"Fire~General FM Request","NodeKey":"C06","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"3","Department":"Facilities Management"},{"searchfield":"Fire~Landlord Responsibility","NodeKey":"C07","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"3","Department":"Facilities Management"},{"searchfield":"Infrastructure~Repair/Service~Lifts and Escalators~Entrapment","NodeKey":"D010101","NodeCode":"Entrapment","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Lifts and Escalators~Faulty","NodeKey":"D010102","NodeCode":"Faulty","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Conveniences (bathrooms and toilets)","NodeKey":"D0102","NodeCode":"Conveniences (bathrooms and toilets)","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Hoist Equipment","NodeKey":"D0103","NodeCode":"Hoist Equipment","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Central Vacuum System","NodeKey":"D0104","NodeCode":"Central Vacuum System","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Access roads","NodeKey":"D0105","NodeCode":"Access roads","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Site grounds","NodeKey":"D0106","NodeCode":"Site grounds","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Building Infrastructure","NodeKey":"D0107","NodeCode":"Building Infrastructure","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Fencing and Gates","NodeKey":"D0108","NodeCode":"Fencing and Gates","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Masts & Towers~Incident/Problem on Mast","NodeKey":"D010901","NodeCode":"Incident/Problem on Mast","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Masts & Towers~Perform Structural Analysis","NodeKey":"D010902","NodeCode":"Perform Structural Analysis","Routing":"W626","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~Repair/Service~Masts & Towers~Perform Structural Integrity Inspection","NodeKey":"D010903","NodeCode":"Perform Structural Integrity Inspection","Routing":"W626","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~Repair/Service~Masts & Towers~Perform Structural Re-Analysis","NodeKey":"D010904","NodeCode":"Perform Structural Re-Analysis","Routing":"W626","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~Repair/Service~Domestic water supply","NodeKey":"D0110","NodeCode":"Domestic water supply","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Pumps","NodeKey":"D0111","NodeCode":"Pumps","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Cable pressurization","NodeKey":"D0112","NodeCode":"Cable pressurization","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Satellite antennae","NodeKey":"D0113","NodeCode":"Satellite antennae","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Payphone Containers","NodeKey":"D0114","NodeCode":"Payphone Containers","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Roller/Shutter Door","NodeKey":"D0115","NodeCode":"Roller/Shutter Door","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~SDC's","NodeKey":"D0116","NodeCode":"SDC's","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Storm Water, Sewerage And Drainage","NodeKey":"D0117","NodeCode":"Storm Water, Sewerage And Drainage","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Repair/Service~Waterproofing","NodeKey":"D0118","NodeCode":"Waterproofing","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Install/Move","NodeKey":"D02","NodeCode":"Install/Move","Routing":"W626","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~TBI","NodeKey":"D03","NodeCode":"TBI","Routing":"W627","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Manholes","NodeKey":"D04","NodeCode":"Manholes","Routing":"W626","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~TFMC Processes~Assist TFMC Operational Staff with probl","NodeKey":"D0501","NodeCode":"Assist TFMC Operational Staff with probl","Routing":"W624","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~TFMC Processes~Assist with Project","NodeKey":"D0502","NodeCode":"Assist with Project","Routing":"W624","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~General FM Request","NodeKey":"D06","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"4","Department":"Facilities Management"},{"searchfield":"Infrastructure~Landlord Responsibility","NodeKey":"D07","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"4","Department":"Facilities Management"},{"searchfield":"Infrastructure~Mast Project~MSI (Mast Inspection)","NodeKey":"D0801","NodeCode":"MSI (Mast Inspection)","Routing":"W624","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~Mast Project~MSI Engineering Review","NodeKey":"D0802","NodeCode":"MSI Engineering Review","Routing":"W624","Type":null,"Effect":"4","Department":"Engineering"},{"searchfield":"Infrastructure~Mast Project~MSI Repairs - Operations","NodeKey":"D0803","NodeCode":"MSI Repairs - Operations","Routing":"W621","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Mast Project~MSI Repairs - Adhoc","NodeKey":"D0804","NodeCode":"MSI Repairs - Adhoc","Routing":"W626","Type":null,"Effect":"4","Department":"Operations"},{"searchfield":"Infrastructure~Mast Project~MSI Repairs - Project","NodeKey":"D0805","NodeCode":"MSI Repairs - Project","Routing":"PREQ","Type":null,"Effect":"4","Department":"Project Management"},{"searchfield":"Security~Repair/Service~Security Equipment Incident","NodeKey":"E0101","NodeCode":"Security Equipment Incident","Routing":"W621","Type":null,"Effect":"5","Department":"Operations"},{"searchfield":"Security~Repair/Service~Tridium Identified~BMSI to Investigate","NodeKey":"E010201","NodeCode":"BMSI to Investigate","Routing":"BMSI","Type":null,"Effect":"5","Department":"BMSI"},{"searchfield":"Security~Repair/Service~Tridium Identified~Repair Security Equipment","NodeKey":"E010202","NodeCode":"Repair Security Equipment","Routing":"W621","Type":null,"Effect":"5","Department":"Operations"},{"searchfield":"Security~Install/Move","NodeKey":"E02","NodeCode":"Install/Move","Routing":"W626","Type":null,"Effect":"5","Department":"Operations"},{"searchfield":"Security~TBI","NodeKey":"E03","NodeCode":"TBI","Routing":"W627","Type":null,"Effect":"5","Department":"Operations"},{"searchfield":"Security~Instructions~Supply Operating Instructions","NodeKey":"E0401","NodeCode":"Supply Operating Instructions","Routing":"W624","Type":null,"Effect":"5","Department":"Engineering"},{"searchfield":"Security~TFMC Processes~Assist TFMC Operational Staff with probl","NodeKey":"E0501","NodeCode":"Assist TFMC Operational Staff with probl","Routing":"W624","Type":null,"Effect":"5","Department":"Engineering"},{"searchfield":"Security~TFMC Processes~Repair RMS System","NodeKey":"E0502","NodeCode":"Repair RMS System","Routing":"W624","Type":null,"Effect":"5","Department":"Engineering"},{"searchfield":"Security~TFMC Processes~Assist with Project","NodeKey":"E0503","NodeCode":"Assist with Project","Routing":"W624","Type":null,"Effect":"5","Department":"Engineering"},{"searchfield":"Security~General FM Request","NodeKey":"E06","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"5","Department":"Facilities Management"},{"searchfield":"Security~Landlord Responsibility","NodeKey":"E07","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"5","Department":"Facilities Management"},{"searchfield":"Soft Services~Cleaning~Indoor Cleaning Incident","NodeKey":"F0101","NodeCode":"Indoor Cleaning Incident","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},
                   {"searchfield":"Soft Services~Cleaning~Change Cleaning Frequency","NodeKey":"F0102","NodeCode":"Change Cleaning Frequency","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Cleaning~Perform Specialized Cleaning","NodeKey":"F0103","NodeCode":"Perform Specialized Cleaning","Routing":"W626","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Cleaning~Add Site to Cleaning Contracts","NodeKey":"F0104","NodeCode":"Add Site to Cleaning Contracts","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Cleaning~Peform Adhoc Cleaning","NodeKey":"F0105","NodeCode":"Peform Adhoc Cleaning","Routing":"W626","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Gardening~Gardening Incident","NodeKey":"F0201","NodeCode":"Gardening Incident","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Gardening~Change Cleaning Frequency","NodeKey":"F0202","NodeCode":"Change Cleaning Frequency","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Gardening~Add Site to Cleaning Contracts","NodeKey":"F0203","NodeCode":"Add Site to Cleaning Contracts","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Gardening~Peform Adhoc Gardening","NodeKey":"F0204","NodeCode":"Peform Adhoc Gardening","Routing":"W626","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Hygiene~Equipment Repairs","NodeKey":"F0301","NodeCode":"Equipment Repairs","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Hygiene~Insufficient Consumables","NodeKey":"F0302","NodeCode":"Insufficient Consumables","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Hygiene~Insufficient Consumables","NodeKey":"F0303","NodeCode":"Insufficient Consumables","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Hygiene~Supply Additional Hygiene Equipment","NodeKey":"F0304","NodeCode":"Supply Additional Hygiene Equipment","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Septic Tank~Empty Tank","NodeKey":"F0401","NodeCode":"Empty Tank","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Waste management~Remove Waste","NodeKey":"F0501","NodeCode":"Remove Waste","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Waste management~Provide Additional Bin","NodeKey":"F0502","NodeCode":"Provide Additional Bin","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Portable Toilet~Empty Toilet","NodeKey":"F0601","NodeCode":"Empty Toilet","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Portable Toilet~Provide Portable Toilet","NodeKey":"F0602","NodeCode":"Provide Portable Toilet","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Pest Control~Pest Control Incident","NodeKey":"F0701","NodeCode":"Pest Control Incident","Routing":"W622","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Pest Control~Pest Control - Special Request","NodeKey":"F0702","NodeCode":"Pest Control - Special Request","Routing":"W626","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Pest Control~Pest Control - Act of Nature","NodeKey":"F0703","NodeCode":"Pest Control - Act of Nature","Routing":"W627","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~Parking~Parking Request","NodeKey":"F0801","NodeCode":"Parking Request","Routing":"SOFT","Type":null,"Effect":"7","Department":"Soft Services"},{"searchfield":"Soft Services~General FM Request","NodeKey":"F09","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"7","Department":"Facilities Management"},{"searchfield":"Soft Services~Landlord Responsibility","NodeKey":"F10","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"7","Department":"Facilities Management"},{"searchfield":"Workplace Services~Furniture management~Move (Churn)","NodeKey":"G0101","NodeCode":"Move (Churn)","Routing":"W632","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~Issue Furniture","NodeKey":"G0102","NodeCode":"Issue Furniture","Routing":"W632","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~Repair Furniture","NodeKey":"G0103","NodeCode":"Repair Furniture","Routing":"W623","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~Receive back into TFMC Store","NodeKey":"G0104","NodeCode":"Receive back into TFMC Store","Routing":"W632","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~Return to Telkom Store","NodeKey":"G0105","NodeCode":"Return to Telkom Store","Routing":"W632","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~Purchase new Furniture (Capex)","NodeKey":"G0106","NodeCode":"Purchase new Furniture (Capex)","Routing":"W626","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~Purchase new Furniture (Opex)","NodeKey":"G0107","NodeCode":"Purchase new Furniture (Opex)","Routing":"W626","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Furniture management~TBI (Theft, Breakage, Incident)","NodeKey":"G0108","NodeCode":"TBI (Theft, Breakage, Incident)","Routing":"W627","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Indoor Plants~Interior Plant Incident/Problem","NodeKey":"G0201","NodeCode":"Interior Plant Incident/Problem","Routing":"W623","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~Indoor Plants~Supply Additional Plants","NodeKey":"G0202","NodeCode":"Supply Additional Plants","Routing":"SOFT","Type":null,"Effect":"6","Department":"Soft Services"},{"searchfield":"Workplace Services~General FM Request","NodeKey":"G03","NodeCode":"General FM Request","Routing":"FM-R","Type":null,"Effect":"6","Department":"Facilities Management"},{"searchfield":"Workplace Services~Landlord Responsibility","NodeKey":"G04","NodeCode":"Landlord Responsibility","Routing":"FM-R","Type":null,"Effect":"6","Department":"Facilities Management"},{"searchfield":"Site Hygiene and Environmental Services~Perform Audit","NodeKey":"H01","NodeCode":"Perform Audit","Routing":"W630","Type":null,"Effect":"8","Department":"Compliance Services"},{"searchfield":"Projects~Incident against a Project in Execution","NodeKey":"I01","NodeCode":"Incident against a Project in Execution","Routing":"PREQ","Type":null,"Effect":"9","Department":"Project Management"},{"searchfield":"Projects~Project Related Request~Business Case Request","NodeKey":"I0201","NodeCode":"Business Case Request","Routing":"PBCA","Type":null,"Effect":"9","Department":"Project Management"},{"searchfield":"Projects~Project Related Request~Request for Feasibility Study","NodeKey":"I0202","NodeCode":"Request for Feasibility Study","Routing":"PFEA","Type":null,"Effect":"9","Department":"Project Management"},{"searchfield":"Projects~Project Related Request~Request for Design","NodeKey":"I0203","NodeCode":"Request for Design","Routing":"PDES","Type":null,"Effect":"9","Department":"Project Management"},{"searchfield":"Projects~Project Related Request~Request to Excecute Project","NodeKey":"I0204","NodeCode":"Request to Excecute Project","Routing":"PREQ","Type":null,"Effect":"9","Department":"Project Management"},{"searchfield":"Projects~Project Related Request~Request to Tender","NodeKey":"I0205","NodeCode":"Request to Tender","Routing":"PTEN","Type":null,"Effect":"9","Department":"Project Management"},{"searchfield":"Properties~Reports~Report on Properties","NodeKey":"J0101","NodeCode":"Report on Properties","Routing":"RREQ","Type":null,"Effect":"9","Department":"Information Technology"},{"searchfield":"Properties~Data~Change/Create Master Data","NodeKey":"J0201","NodeCode":"Change/Create Master Data","Routing":"REDA","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Leasing/Letting~Lease In~New Lease In","NodeKey":"J030101","NodeCode":"New Lease In","Routing":"RENL","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Leasing/Letting~Lease In~Existing Lease In","NodeKey":"J030102","NodeCode":"Existing Lease In","Routing":"REXL","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Leasing/Letting~Letting Out~New Letting Out","NodeKey":"J030201","NodeCode":"New Letting Out","Routing":"RENO","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Leasing/Letting~Letting Out~Existing Letting Out","NodeKey":"J030202","NodeCode":"Existing Letting Out","Routing":"REXO","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Leasing/Letting~Co-location~New Co-Location","NodeKey":"J030301","NodeCode":"New Co-Location","Routing":"RENC","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Leasing/Letting~Co-location~Existing Co-Location","NodeKey":"J030302","NodeCode":"Existing Co-Location","Routing":"REXC","Type":null,"Effect":"9","Department":"Property Management"},
{"searchfield":"Properties~Property Zoning~Subdivisions","NodeKey":"J0401","NodeCode":"Subdivisions","Routing":"RESU","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Property Zoning~Land Use Management","NodeKey":"J0402","NodeCode":"Land Use Management","Routing":"RELM","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Financial~Financial Request/Query","NodeKey":"J0501","NodeCode":"Financial Request/Query","Routing":"REFI","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Utilities~Utility Related Query","NodeKey":"J0601","NodeCode":"Utility Related Query","Routing":"REUT","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Valuation~Valuation Request/Query","NodeKey":"J0701","NodeCode":"Valuation Request/Query","Routing":"REVA","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Buy/Sell~Sourcing/Acquisition","NodeKey":"J0801","NodeCode":"Sourcing/Acquisition","Routing":"RESO","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Buy/Sell~Disposal - Sale","NodeKey":"J0802","NodeCode":"Disposal - Sale","Routing":"REDI","Type":null,"Effect":"9","Department":"Property Management"},{"searchfield":"Properties~Optimisation~PROPERTY OPTIMISATION REQUEST","NodeKey":"J0901","NodeCode":"PROPERTY OPTIMISATION REQUEST","Routing":"REOP","Type":null,"Effect":"9","Department":"FACILITIES MANAGEMENT"},{"searchfield":"Properties~Compliance~Office Compliance/Zones/Drawings","NodeKey":"J1001","NodeCode":"Office Compliance/Zones/Drawings","Routing":"FM-R","Type":null,"Effect":"9","Department":"Facilities Management"},{"searchfield":"Properties~Drawings~Request Latest Drawings","NodeKey":"J1101","NodeCode":"Request Latest Drawings","Routing":"DRAW","Type":null,"Effect":"9","Department":"Compliance Services"},{"searchfield":"General~Request a Report","NodeKey":"K01","NodeCode":"Request a Report","Routing":"RREQ","Type":null,"Effect":"9","Department":"Information Technology"},{"searchfield":"SLA Agreement~SMDB~Request an Additional Report","NodeKey":"L0101","NodeCode":"Request an Additional Report","Routing":"SMDB","Type":null,"Effect":"9","Department":"Information Technology"},{"searchfield":"SLA Agreement~SMDB~Request changes to SMDB","NodeKey":"L0102","NodeCode":"Request changes to SMDB","Routing":"SMDB","Type":null,"Effect":"9","Department":"Information Technology"},{"searchfield":"SLA Agreement~PPL~Request new PPL document","NodeKey":"L0201","NodeCode":"Request new PPL document","Routing":"PPL","Type":null,"Effect":"9","Department":"Compliance Services"},{"searchfield":"SLA Agreement~PPL~Request chnages to PPL document","NodeKey":"L0202","NodeCode":"Request chnages to PPL document","Routing":"PPL","Type":null,"Effect":"9","Department":"Compliance Services"}];
        };
    function getLocationData () {
            oContext = {} ;
            oContext.siteList = [{sitecode: '1',sitename:'Site 1'},{sitecode: '2',sitename:'Site 2'}];
            oContext.buildingList = [{buildingcode: '1',buildingname:'Building 1', Priority:'P1',other:{}},{buildingcode: '2',buildingname:'Building 2', Priority:'P5',other:{}}];
            oContext.floorList = ['Outside','Ground Floor','First Floor'];
            oContext.connected = false ;   
            return oContext ;
        }
    function getDivisionData() {
            oContext = {} ;
            oContext.divisionList = ['Telkom','8Ta','Cyperdata'] ;
            return oContext ;
        }
       return factory;
    };
    
    dataFactory.$inject = ['$http'];
        
    angular.module('templateApp').factory('dataFactory', 
                                          dataFactory);
                                           
}());