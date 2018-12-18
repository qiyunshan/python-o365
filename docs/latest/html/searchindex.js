Search.setIndex({docnames:["api","api/account","api/address_book","api/attachment","api/calendar","api/connection","api/drive","api/mailbox","api/message","api/sharepoint","api/utils","getting_started","index","usage","usage/account","usage/connection","usage/mailbox","usage/query"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["api.rst","api/account.rst","api/address_book.rst","api/attachment.rst","api/calendar.rst","api/connection.rst","api/drive.rst","api/mailbox.rst","api/message.rst","api/sharepoint.rst","api/utils.rst","getting_started.rst","index.rst","usage.rst","usage/account.rst","usage/connection.rst","usage/mailbox.rst","usage/query.rst"],objects:{"O365.account":{Account:[1,1,1,""]},"O365.account.Account":{__init__:[1,2,1,""],address_book:[1,2,1,""],authenticate:[1,2,1,""],connection:[1,3,1,""],mailbox:[1,2,1,""],new_message:[1,2,1,""],schedule:[1,2,1,""],sharepoint:[1,2,1,""],storage:[1,2,1,""]},"O365.address_book":{AddressBook:[2,1,1,""],BaseContactFolder:[2,1,1,""],Contact:[2,1,1,""],ContactFolder:[2,1,1,""],GlobalAddressList:[2,1,1,""],RecipientType:[2,1,1,""]},"O365.address_book.AddressBook":{__init__:[2,2,1,""]},"O365.address_book.BaseContactFolder":{__init__:[2,2,1,""],contact_constructor:[2,3,1,""],get_contact_by_email:[2,2,1,""],get_contacts:[2,2,1,""],message_constructor:[2,3,1,""]},"O365.address_book.Contact":{"delete":[2,2,1,""],__init__:[2,2,1,""],business_address:[2,3,1,""],business_phones:[2,3,1,""],categories:[2,3,1,""],company_name:[2,3,1,""],created:[2,3,1,""],department:[2,3,1,""],display_name:[2,3,1,""],emails:[2,3,1,""],folder_id:[2,3,1,""],full_name:[2,3,1,""],home_address:[2,3,1,""],home_phones:[2,3,1,""],job_title:[2,3,1,""],main_email:[2,3,1,""],message_constructor:[2,3,1,""],mobile_phone:[2,3,1,""],modified:[2,3,1,""],name:[2,3,1,""],new_message:[2,2,1,""],office_location:[2,3,1,""],other_address:[2,3,1,""],preferred_language:[2,3,1,""],save:[2,2,1,""],surname:[2,3,1,""],title:[2,3,1,""],to_api_data:[2,2,1,""]},"O365.address_book.ContactFolder":{"delete":[2,2,1,""],create_child_folder:[2,2,1,""],get_folder:[2,2,1,""],get_folders:[2,2,1,""],move_folder:[2,2,1,""],new_contact:[2,2,1,""],new_message:[2,2,1,""],update_folder_name:[2,2,1,""]},"O365.address_book.GlobalAddressList":{__init__:[2,2,1,""],get_contact_by_email:[2,2,1,""]},"O365.address_book.RecipientType":{BCC:[2,3,1,""],CC:[2,3,1,""],TO:[2,3,1,""]},"O365.calendar":{Attendee:[4,1,1,""],AttendeeType:[4,1,1,""],Attendees:[4,1,1,""],Calendar:[4,1,1,""],CalendarColors:[4,1,1,""],DailyEventFrequency:[4,1,1,""],Event:[4,1,1,""],EventAttachment:[4,1,1,""],EventAttachments:[4,1,1,""],EventRecurrence:[4,1,1,""],EventResponse:[4,1,1,""],EventSensitivity:[4,1,1,""],EventShowAs:[4,1,1,""],ResponseStatus:[4,1,1,""],Schedule:[4,1,1,""]},"O365.calendar.Attendee":{__init__:[4,2,1,""],address:[4,3,1,""],attendee_type:[4,3,1,""],name:[4,3,1,""],response_status:[4,3,1,""]},"O365.calendar.AttendeeType":{Optional:[4,3,1,""],Required:[4,3,1,""],Resource:[4,3,1,""]},"O365.calendar.Attendees":{__init__:[4,2,1,""],add:[4,2,1,""],clear:[4,2,1,""],remove:[4,2,1,""],to_api_data:[4,2,1,""]},"O365.calendar.Calendar":{"delete":[4,2,1,""],__init__:[4,2,1,""],event_constructor:[4,3,1,""],get_event:[4,2,1,""],get_events:[4,2,1,""],new_event:[4,2,1,""],owner:[4,3,1,""],update:[4,2,1,""]},"O365.calendar.CalendarColors":{Auto:[4,3,1,""],LightBlue:[4,3,1,""],LightBrown:[4,3,1,""],LightGray:[4,3,1,""],LightGreen:[4,3,1,""],LightOrange:[4,3,1,""],LightPink:[4,3,1,""],LightRed:[4,3,1,""],LightTeal:[4,3,1,""],LightYellow:[4,3,1,""],MaxColor:[4,3,1,""]},"O365.calendar.DailyEventFrequency":{__init__:[4,2,1,""]},"O365.calendar.Event":{"delete":[4,2,1,""],__init__:[4,2,1,""],accept_event:[4,2,1,""],attachments:[4,3,1,""],attendees:[4,3,1,""],body:[4,3,1,""],categories:[4,3,1,""],created:[4,3,1,""],decline_event:[4,2,1,""],end:[4,3,1,""],get_body_soup:[4,2,1,""],get_body_text:[4,2,1,""],importance:[4,3,1,""],is_all_day:[4,3,1,""],is_reminder_on:[4,3,1,""],location:[4,3,1,""],modified:[4,3,1,""],organizer:[4,3,1,""],recurrence:[4,3,1,""],remind_before_minutes:[4,3,1,""],response_requested:[4,3,1,""],response_status:[4,3,1,""],save:[4,2,1,""],sensitivity:[4,3,1,""],show_as:[4,3,1,""],start:[4,3,1,""],subject:[4,3,1,""],to_api_data:[4,2,1,""]},"O365.calendar.EventRecurrence":{__init__:[4,2,1,""],day_of_month:[4,3,1,""],days_of_week:[4,3,1,""],end_date:[4,3,1,""],first_day_of_week:[4,3,1,""],index:[4,3,1,""],interval:[4,3,1,""],month:[4,3,1,""],occurrences:[4,3,1,""],recurrence_time_zone:[4,3,1,""],set_daily:[4,2,1,""],set_monthly:[4,2,1,""],set_range:[4,2,1,""],set_weekly:[4,2,1,""],set_yearly:[4,2,1,""],start_date:[4,3,1,""],to_api_data:[4,2,1,""]},"O365.calendar.EventResponse":{Accepted:[4,3,1,""],Declined:[4,3,1,""],NotResponded:[4,3,1,""],Organizer:[4,3,1,""],TentativelyAccepted:[4,3,1,""]},"O365.calendar.EventSensitivity":{Confidential:[4,3,1,""],Normal:[4,3,1,""],Personal:[4,3,1,""],Private:[4,3,1,""]},"O365.calendar.EventShowAs":{Busy:[4,3,1,""],Free:[4,3,1,""],Oof:[4,3,1,""],Tentative:[4,3,1,""],Unknown:[4,3,1,""],WorkingElsewhere:[4,3,1,""]},"O365.calendar.ResponseStatus":{__init__:[4,2,1,""]},"O365.calendar.Schedule":{__init__:[4,2,1,""],calendar_constructor:[4,3,1,""],event_constructor:[4,3,1,""],get_calendar:[4,2,1,""],get_default_calendar:[4,2,1,""],get_events:[4,2,1,""],list_calendars:[4,2,1,""],new_calendar:[4,2,1,""],new_event:[4,2,1,""]},"O365.connection":{Connection:[5,1,1,""],MSGraphProtocol:[5,1,1,""],MSOffice365Protocol:[5,1,1,""],Protocol:[5,1,1,""],oauth_authentication_flow:[5,5,1,""]},"O365.connection.Connection":{"delete":[5,2,1,""],__init__:[5,2,1,""],check_token_file:[5,2,1,""],get:[5,2,1,""],get_authorization_url:[5,2,1,""],get_session:[5,2,1,""],naive_request:[5,2,1,""],oauth_request:[5,2,1,""],patch:[5,2,1,""],post:[5,2,1,""],put:[5,2,1,""],refresh_token:[5,2,1,""],request_token:[5,2,1,""],set_proxy:[5,2,1,""]},"O365.connection.MSGraphProtocol":{__init__:[5,2,1,""]},"O365.connection.MSOffice365Protocol":{__init__:[5,2,1,""]},"O365.connection.Protocol":{__init__:[5,2,1,""],convert_case:[5,2,1,""],get_scopes_for:[5,2,1,""],get_service_keyword:[5,2,1,""],to_api_case:[5,4,1,""]},"O365.drive":{CopyOperation:[6,1,1,""],DownloadableMixin:[6,1,1,""],Drive:[6,1,1,""],DriveItem:[6,1,1,""],DriveItemPermission:[6,1,1,""],DriveItemVersion:[6,1,1,""],File:[6,1,1,""],Folder:[6,1,1,""],Image:[6,1,1,""],Photo:[6,1,1,""],Storage:[6,1,1,""]},"O365.drive.CopyOperation":{__init__:[6,2,1,""],check_status:[6,2,1,""],get_item:[6,2,1,""]},"O365.drive.DownloadableMixin":{download:[6,2,1,""]},"O365.drive.Drive":{__init__:[6,2,1,""],get_item:[6,2,1,""],get_items:[6,2,1,""],get_recent:[6,2,1,""],get_root_folder:[6,2,1,""],get_shared_with_me:[6,2,1,""],get_special_folder:[6,2,1,""],refresh:[6,2,1,""],search:[6,2,1,""]},"O365.drive.DriveItem":{"delete":[6,2,1,""],__init__:[6,2,1,""],copy:[6,2,1,""],get_parent:[6,2,1,""],get_permissions:[6,2,1,""],get_thumbnails:[6,2,1,""],get_version:[6,2,1,""],get_versions:[6,2,1,""],is_file:[6,3,1,""],is_folder:[6,3,1,""],is_image:[6,3,1,""],is_photo:[6,3,1,""],move:[6,2,1,""],share_with_invite:[6,2,1,""],share_with_link:[6,2,1,""],update:[6,2,1,""]},"O365.drive.DriveItemPermission":{"delete":[6,2,1,""],__init__:[6,2,1,""],update_roles:[6,2,1,""]},"O365.drive.DriveItemVersion":{__init__:[6,2,1,""],download:[6,2,1,""],restore:[6,2,1,""]},"O365.drive.File":{__init__:[6,2,1,""]},"O365.drive.Folder":{__init__:[6,2,1,""],create_child_folder:[6,2,1,""],download_contents:[6,2,1,""],get_items:[6,2,1,""],search:[6,2,1,""],upload_file:[6,2,1,""]},"O365.drive.Image":{__init__:[6,2,1,""],dimensions:[6,3,1,""]},"O365.drive.Photo":{__init__:[6,2,1,""]},"O365.drive.Storage":{__init__:[6,2,1,""],drive_constructor:[6,3,1,""],get_default_drive:[6,2,1,""],get_drive:[6,2,1,""],get_drives:[6,2,1,""]},"O365.mailbox":{Folder:[7,1,1,""],MailBox:[7,1,1,""]},"O365.mailbox.Folder":{"delete":[7,2,1,""],__init__:[7,2,1,""],copy_folder:[7,2,1,""],create_child_folder:[7,2,1,""],delete_message:[7,2,1,""],get_folder:[7,2,1,""],get_folders:[7,2,1,""],get_message:[7,2,1,""],get_messages:[7,2,1,""],get_parent_folder:[7,2,1,""],message_constructor:[7,3,1,""],move_folder:[7,2,1,""],new_message:[7,2,1,""],refresh_folder:[7,2,1,""],update_folder_name:[7,2,1,""]},"O365.mailbox.MailBox":{__init__:[7,2,1,""],deleted_folder:[7,2,1,""],drafts_folder:[7,2,1,""],folder_constructor:[7,3,1,""],inbox_folder:[7,2,1,""],junk_folder:[7,2,1,""],outbox_folder:[7,2,1,""],sent_folder:[7,2,1,""]},"O365.message":{HandleRecipientsMixin:[8,1,1,""],Message:[8,1,1,""],MessageAttachment:[8,1,1,""],MessageAttachments:[8,1,1,""],Recipient:[8,1,1,""],Recipients:[8,1,1,""]},"O365.message.Message":{"delete":[8,2,1,""],__init__:[8,2,1,""],attachments:[8,3,1,""],bcc:[8,3,1,""],body:[8,3,1,""],categories:[8,3,1,""],cc:[8,3,1,""],copy:[8,2,1,""],created:[8,3,1,""],forward:[8,2,1,""],get_body_soup:[8,2,1,""],get_body_text:[8,2,1,""],importance:[8,3,1,""],is_draft:[8,3,1,""],is_read:[8,3,1,""],mark_as_read:[8,2,1,""],modified:[8,3,1,""],move:[8,2,1,""],received:[8,3,1,""],reply:[8,2,1,""],reply_to:[8,3,1,""],save_draft:[8,2,1,""],send:[8,2,1,""],sender:[8,3,1,""],sent:[8,3,1,""],subject:[8,3,1,""],to:[8,3,1,""],to_api_data:[8,2,1,""]},"O365.message.Recipient":{__init__:[8,2,1,""],address:[8,3,1,""],name:[8,3,1,""]},"O365.message.Recipients":{__init__:[8,2,1,""],add:[8,2,1,""],clear:[8,2,1,""],get_first_recipient_with_address:[8,2,1,""],remove:[8,2,1,""]},"O365.sharepoint":{Sharepoint:[9,1,1,""],SharepointList:[9,1,1,""],SharepointListItem:[9,1,1,""],Site:[9,1,1,""]},"O365.sharepoint.Sharepoint":{__init__:[9,2,1,""],get_root_site:[9,2,1,""],get_site:[9,2,1,""],search_site:[9,2,1,""],site_constructor:[9,3,1,""]},"O365.sharepoint.SharepointList":{__init__:[9,2,1,""],get_items:[9,2,1,""],list_item_constructor:[9,3,1,""]},"O365.sharepoint.SharepointListItem":{__init__:[9,2,1,""]},"O365.sharepoint.Site":{__init__:[9,2,1,""],get_default_document_library:[9,2,1,""],get_document_library:[9,2,1,""],get_lists:[9,2,1,""],get_subsites:[9,2,1,""],list_constructor:[9,3,1,""],list_document_libraries:[9,2,1,""]},"O365.utils":{attachment:[3,0,0,"-"],utils:[10,0,0,"-"]},"O365.utils.attachment":{AttachableMixin:[3,1,1,""],BaseAttachment:[3,1,1,""],BaseAttachments:[3,1,1,""]},"O365.utils.attachment.AttachableMixin":{__init__:[3,2,1,""],attachment_name:[3,3,1,""],attachment_type:[3,3,1,""],to_api_data:[3,2,1,""]},"O365.utils.attachment.BaseAttachment":{__init__:[3,2,1,""],attach:[3,2,1,""],save:[3,2,1,""],to_api_data:[3,2,1,""]},"O365.utils.attachment.BaseAttachments":{__init__:[3,2,1,""],add:[3,2,1,""],clear:[3,2,1,""],download_attachments:[3,2,1,""],remove:[3,2,1,""],to_api_data:[3,2,1,""]},"O365.utils.utils":{ApiComponent:[10,1,1,""],ChainOperator:[10,1,1,""],ImportanceLevel:[10,1,1,""],OneDriveWellKnowFolderNames:[10,1,1,""],OutlookWellKnowFolderNames:[10,1,1,""],Pagination:[10,1,1,""],Query:[10,1,1,""],TrackerSet:[10,1,1,""]},"O365.utils.utils.ApiComponent":{__init__:[10,2,1,""],build_url:[10,2,1,""],new_query:[10,2,1,""],q:[10,2,1,""]},"O365.utils.utils.ChainOperator":{AND:[10,3,1,""],OR:[10,3,1,""]},"O365.utils.utils.ImportanceLevel":{High:[10,3,1,""],Low:[10,3,1,""],Normal:[10,3,1,""]},"O365.utils.utils.OneDriveWellKnowFolderNames":{APP_ROOT:[10,3,1,""],ATTACHMENTS:[10,3,1,""],CAMERA_ROLL:[10,3,1,""],DOCUMENTS:[10,3,1,""],MUSIC:[10,3,1,""],PHOTOS:[10,3,1,""]},"O365.utils.utils.OutlookWellKnowFolderNames":{DELETED:[10,3,1,""],DRAFTS:[10,3,1,""],INBOX:[10,3,1,""],JUNK:[10,3,1,""],OUTBOX:[10,3,1,""],SENT:[10,3,1,""]},"O365.utils.utils.Pagination":{__init__:[10,2,1,""]},"O365.utils.utils.Query":{"function":[10,2,1,""],"new":[10,2,1,""],__init__:[10,2,1,""],all:[10,2,1,""],any:[10,2,1,""],as_params:[10,2,1,""],chain:[10,2,1,""],clear:[10,2,1,""],clear_filters:[10,2,1,""],contains:[10,2,1,""],endswith:[10,2,1,""],equals:[10,2,1,""],get_filters:[10,2,1,""],get_order:[10,2,1,""],get_selects:[10,2,1,""],greater:[10,2,1,""],greater_equal:[10,2,1,""],has_filters:[10,3,1,""],has_order:[10,3,1,""],has_selects:[10,3,1,""],iterable:[10,2,1,""],less:[10,2,1,""],less_equal:[10,2,1,""],logical_operator:[10,2,1,""],negate:[10,2,1,""],on_attribute:[10,2,1,""],order_by:[10,2,1,""],select:[10,2,1,""],startswith:[10,2,1,""],unequal:[10,2,1,""]},"O365.utils.utils.TrackerSet":{__init__:[10,2,1,""],add:[10,2,1,""]},O365:{account:[1,0,0,"-"],address_book:[2,0,0,"-"],calendar:[4,0,0,"-"],connection:[5,0,0,"-"],drive:[6,0,0,"-"],mailbox:[7,0,0,"-"],message:[8,0,0,"-"],sharepoint:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","staticmethod","Python static method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:staticmethod","5":"py:function"},terms:{"300x400":6,"4mb":[6,15],"4xx":5,"5xx":5,"byte":6,"case":[5,10,15],"class":[1,2,3,4,5,6,7,8,9,10,14,15,16,17],"default":[1,4,5,6,9,15],"enum":[2,4,10],"final":10,"float":6,"function":[2,3,5,6,9,10,16,17],"import":[4,8,14,15],"int":[2,4,5,6,7,9,10],"long":15,"new":[1,2,3,4,5,6,7,8,10,11,14],"return":[1,2,3,4,5,6,7,8,9,10],"short":14,"static":5,"true":[4,5,6,7,8,9,10],"try":[6,14,15],AND:10,But:15,For:[10,11,15],Not:[2,7],One:[0,12,14],That:14,The:[5,6,7,14,15],Then:10,There:16,Use:11,Using:[13,15,16],Will:16,__init__:[1,2,3,4,5,6,7,8,9,10],_oauth_scope_prefix:5,_protocol_url:5,accept:[4,9,17],accept_ev:4,access:[1,2,5,6,10,12,13,15],account:[0,2,3,4,6,7,8,9,12,13,15],accur:4,across:[5,6],act:6,add:[2,3,4,7,8,10,11,14],added:[5,10,16],adding:5,address:[0,1,4,8,10,12,14],address_book:[1,2,14],address_book_al:14,address_book_all_shar:14,address_book_shar:14,addressbook:[1,2],administr:2,after:[5,7,14],again:14,alia:[1,2,4,6,7,9],all:[2,4,5,6,8,10,14,16],allow:[2,3,4,6,7,9,10,15],allowed_pdf_extens:6,along:10,alreadi:[10,14],also:[2,6,15],amount:10,ani:[1,2,3,4,7,10,15,16,17],anonym:6,anoth:[6,7,14],anyon:6,anyth:15,anywai:15,api:[2,3,5,6,9,10,11,12,13],api_object:3,api_vers:[5,10,15],apicompon:[2,3,4,6,7,8,9,10],app:[2,5,6,11],app_root:10,appear:6,appli:[2,4,6,7,9,10],applic:[11,14],approot:10,approv:[5,14],arg:[1,6,9,10],around:4,as_param:10,ascend:10,assign:[2,4,8],associ:2,assum:16,asynchron:6,attach:[0,2,4,7,8,10,12,15],attachablemixin:[2,3,4,8],attachment_nam:3,attachment_name_properti:3,attachment_typ:3,attende:4,attendee_typ:4,attendeetyp:4,attribut:[6,7,10,15,17],auth:5,authent:[1,5,12,13],author:5,authorization_url:5,auto:[4,6],avail:[2,6,14,16],back:[4,8,14],base:[1,2,3,4,5,6,7,8,9,10,11,15],baseattach:[3,4,8],basecontactfold:2,basic:[12,14],batch:[2,4,6,7,9,10],bcc:[2,8],beautifulsoup4:[4,8],beautifulsoup:[4,8],been:14,befor:[4,14],behaviour:15,below:[11,14],best:10,beta:15,between:[5,6,12,13],big:6,bigger:6,bin:6,blahblah:14,blank:8,bodi:[4,6,8],book:[0,1,12,14],bool:[1,2,3,4,5,6,7,8,10],broaden:6,broadli:6,bs4:[4,8],build:10,build_url:10,built:14,busi:[2,4],business_address:2,business_phon:2,c300x400:6,c300x400_crop:6,calend:4,calendar:[0,1,12,14],calendar_constructor:4,calendar_id:4,calendar_nam:4,calendarcolor:4,call:[3,5,6,9,14],camelcas:5,camera_rol:10,camerarol:10,can:[2,4,6,7,10,14,15,16,17],capabl:2,casing_funct:5,categori:[2,4,8],caution:6,chain:10,chainoper:10,chang:[2,4,7,10,14,15],check:[2,4,5,6,8,10,15,16],check_statu:6,check_token_fil:5,child:[2,6,7,13],choos:[1,12,13],chunk:6,chunk_siz:6,claus:10,clear:[3,4,8,10],clear_filt:10,client_id:[1,5,11,15],client_secret:[1,5,11,15],cloud:[2,3,4,5,7,8,10],code:[5,11],collect:[3,4,6,9,10],color:4,com:[5,6,9,10,11,14,15],combin:10,comma:9,comment:4,common:10,commun:[3,4,5,10,15],compani:2,company_nam:2,compar:[5,10],complet:[2,4,6],compon:2,con:[1,2,4,6,7,8,9,10],condit:[2,4,6,7,9],confidenti:4,configur:[1,4,5],conform:10,connect:[0,1,2,4,6,7,8,9,10,11,12,13],consent:[2,14,15],consid:4,consol:14,constructor:[10,15],contact:[2,6,14],contact_constructor:2,contactfold:2,contain:[1,6,10],content:[0,6,7,12,13],contoso:9,convent:[2,4],convers:5,convert:[1,5,6,8,10],convert_cas:5,convert_to_pdf:6,copi:[6,7,8,14],copy_fold:7,copyoper:6,could:11,cover:6,creat:[1,2,3,4,5,6,7,8,10,11,17],create_child_fold:[2,6,7],creation:6,credenti:[1,5,14,15],crop:6,current:[4,6,8,14,16],custom:[1,3,5,6,10,14],custom_nam:3,dai:4,dailyeventfrequ:4,data:[2,3,4,5,6,7,8,9,10,15],datatyp:5,date:4,datetim:[2,4],day_of_month:4,days_of_week:4,deal:3,declin:4,decline_ev:4,default_resourc:[5,15],defin:[3,9,15],delai:6,deleg:11,delet:[2,4,5,6,7,8,10],delete_messag:7,deleted_fold:[7,16],deleteditem:[7,10,16],depart:2,descend:10,descript:[6,14],destin:7,detail:[12,15],dev:[5,11],develop:11,dict:[2,3,4,5,6,8,10],dictionari:[2,3,5,8],did:14,differ:[6,8,13,15],dimens:6,direct:16,directli:16,disabl:4,disk:3,displai:2,display_nam:2,displaynam:[7,16],doc:[2,4,5,6,10],document:[9,10,14,15],doe:15,doesn:1,domain:15,don:[5,14,15],done:[5,15],download:[3,4,6,7,8],download_attach:[3,4,7,8],download_cont:6,downloadablemixin:6,draft:[2,7,8,10,16],drafts_fold:[7,16],drive:[0,1,9,12,14],drive_constructor:6,drive_id:[6,9],driveitem:6,driveitempermiss:6,driveitemvers:6,dure:[4,5],each:[5,6,15],easier:14,edit:[6,8],effect:10,either:[8,17],element:[3,6,8,10],els:14,email:[2,4,6,8,11,15,17],email_address:10,emailaddress:10,emb:6,embed:6,empti:[1,10],enabl:4,end:4,end_dat:4,endpoint:[2,6,10,15],endswith:10,enumer:[2,4,10],equal:10,errata03:[2,4],error:5,establish:11,etc:[2,15,16],event:[1,2,4,14,17],event_constructor:4,event_id:4,eventattach:4,eventrecurr:4,eventrespons:4,eventsensit:4,eventshowa:4,everi:[4,5,15],everyth:10,everytim:14,everywher:15,exampl:[10,14,15],except:5,exhaust:10,exist:[2,3,4,5,10],exit:8,explicitli:5,expos:10,extens:6,extra:[1,5],failur:[1,2,3,4,5,6,7,8],fals:[3,4,6,7,9],featur:[1,11],fetch:[7,16],few:16,field:[6,8],file:[1,3,5,6,14],filenam:6,filter:[2,4,6,7,9,10,16,17],find:16,first:[2,8],first_day_of_week:4,flow:[1,5,14],fluent:10,folder:[2,4,6,7,8,9,12,13],folder_constructor:7,folder_id:[2,7,16],folder_nam:[2,7,16],follow:15,forc:14,format:2,former:6,forward:8,found:[8,15],free:4,frm:4,from:[1,2,3,4,5,6,7,8,11,14,15,16],full:[2,5,14],full_nam:2,func:10,function_nam:10,futur:5,gal:[1,14],gener:[5,11,16],georg:10,get:[1,2,3,4,5,6,7,8,9,12,13],get_authorization_url:5,get_body_soup:[4,8],get_body_text:[4,8],get_calendar:4,get_contact:2,get_contact_by_email:2,get_default_calendar:4,get_default_document_librari:9,get_default_dr:6,get_document_librari:9,get_driv:6,get_ev:4,get_filt:10,get_first_recipient_with_address:8,get_fold:[2,7,16],get_item:[6,9],get_list:9,get_messag:7,get_ord:10,get_par:6,get_parent_fold:7,get_permiss:6,get_rec:6,get_root_fold:6,get_root_sit:9,get_scopes_for:5,get_select:10,get_service_keyword:5,get_sess:5,get_shared_with_m:6,get_sit:9,get_special_fold:6,get_subsit:9,get_thumbnail:6,get_vers:6,getter:[2,3,4,8],git:11,github:[6,11],give:14,given:[4,5,7,8,10,15],global:[1,2,14],globaladdresslist:[1,2],grant:6,graph:[5,10,11,12,13],greater:10,greater_equ:10,group:[2,6,9,15],handl:[1,5],handler:8,handlerecipientsmixin:[4,8],has:[2,6,10,11,15],has_filt:10,has_ord:10,has_select:10,hassl:14,have:[2,4,5,6,11,14,15,16],haven:14,height:6,hellofold:7,help:[4,17],helper:[5,10],here:[2,4],high:10,hold:6,home:[2,14],home_address:2,home_phon:2,host:9,host_nam:9,how:[10,16],howev:[6,15],html:[2,4,8],http:[2,4,5,6,10,11,14],huge:14,ids:2,imag:6,implement:[5,10,15],importancelevel:[4,8,10],inbox:[7,10,16],inbox_fold:[7,16],inbuilt:15,includ:[6,14],index:[4,6,12],infer:15,info:[4,14],inform:[1,2,4,8],inherit:[3,6,15],initi:[4,5,10,12,13],insid:[6,10],instal:12,instanc:[1,2,4,5,6,7,9,10,12,13,16],instanti:1,instead:[2,3,4,6,7,8,9],interact:10,interfac:15,intern:5,interv:4,invalid:1,invit:6,is_all_dai:4,is_draft:8,is_fil:6,is_fold:6,is_imag:6,is_photo:6,is_read:8,is_reminder_on:4,issu:6,item:[2,4,6,7,9,14],item_id:6,iter:10,iterable_nam:10,its:7,itself:15,job:[2,15],job_titl:2,junk:[7,10,16],junk_fold:[7,16],junkemail:10,just:[5,8,15],keep:5,kei:[2,4,5,8,10],keyword:[5,9,10],know:16,known:[8,16],kwarg:[1,2,3,4,5,6,7,8,9,10],languag:2,last:[2,4,6,8],latest:11,lead:9,less:10,less_equ:10,let:16,level:8,librari:[9,15],lightblu:4,lightbrown:4,lightgrai:4,lightgreen:4,lightorang:4,lightpink:4,lightr:4,lightteal:4,lightyellow:4,like:[10,14,15,16],limit:[2,4,6,7,9,10,16],link:[5,6,10],list:[1,2,3,4,5,6,7,8,9,14],list_calendar:4,list_constructor:9,list_document_librari:9,list_item_constructor:9,listitem:9,load:5,local:[3,6],locat:[2,3,4,6],log:6,logic:10,logical_oper:10,login:11,look:14,loop:6,low:10,lowercamelcas:5,made:5,mai:[6,11],mail:[7,11,14],mail_fold:16,mailbox:[0,1,8,12,13,14,15],mailbox_shar:14,mailid:14,main_email:2,main_resourc:[1,2,3,4,6,7,8,9,10,14],make:[5,6,8,9,14],manag:[2,8],mani:[5,15],manipul:14,mark:8,mark_as_read:8,match:[6,7],max:[2,4,6,7,9],maxcolor:4,meet:4,member:6,memori:[3,6],messag:[0,1,2,3,4,6,7,12,15,17],message_al:14,message_all_shar:14,message_constructor:[2,7],message_id:7,message_send:14,message_send_shar:14,messageattach:8,metadata:6,method:[2,3,5,10,14],microsoft:[5,10,11,14,15],millisecond:5,minut:4,mobile_phon:2,modifi:[2,4,6,8],modul:12,moment:6,monitor_url:6,month:4,more:[2,3,4,5,6,7,9,10,11,14,15],move:[2,6,7,8],move_fold:[2,7],msgraph:15,msgraphprotocol:[5,15],msoffice365protocol:[5,15],multipl:[5,6,8,9],music:10,must:[2,3,5,6,7,8,10],my_client_id:14,my_client_secret:14,my_protocol:15,myserv:14,naive_request:5,name:[2,3,4,5,6,7,8,10,14,16],need:[3,5,6,11,14,15],negat:10,new_calendar:4,new_contact:2,new_ev:4,new_messag:[1,2,7],new_queri:[10,16],newli:[2,6,7],next:10,next_link:10,non:8,none:[1,2,3,4,5,6,7,8,9,10],normal:[4,5,10],note:[6,11],noth:[5,14],notrespond:4,number:[2,5,6,16],o365:[1,2,3,4,5,6,7,8,9,10,11,14,15],oasi:[2,4],oauth2:5,oauth2sess:5,oauth:[1,5,12],oauth_authentication_flow:5,oauth_request:5,object:[1,3,4,5,6,8,9,10],occurr:4,odata:[2,4,6,9,10],offic:[2,5,14,15],office365:[2,5,11,12,13],office_loc:2,old:14,on_attribut:10,on_cloud:3,one:[2,4,6,7,10,15],onedr:[1,6,14,15],onedrivewellknowfoldernam:10,onli:[2,4,5,6,14,15,16],oof:4,open:[2,4,5,14],oper:[4,6,10],oppos:16,option:[3,4,14,15],order:[2,4,6,7,9,10],order_bi:[2,4,6,7,9,10],org:[2,4,11],organ:[4,6,14],origin:10,orphan:3,other:[1,2,3,4,5,6,10,14,15],other_address:2,out:14,outbox:[7,10,16],outbox_fold:[7,16],outlook:[5,11,14,15],outlookwellknowfoldernam:[8,10],over:[2,4,6,7,9,15],owa:[5,11,14],own:[7,11,15],owner:[4,15],packag:11,page:[12,14,15],pagin:[2,4,6,7,9,10],param:[4,5],paramet:[1,2,3,4,5,6,7,8,9,10],parent:[1,2,3,4,6,7,8,9,10],pars:[4,8],part2:[2,4],part:10,pascalcas:5,pass:[1,5],password:[5,11,14],past:14,patch:5,path:[3,5,6,9],path_to_sit:9,pdf:6,per:5,percentag:6,perform:[1,5,10],permiss:[6,11,14,15],person:[1,2,4,14],photo:[6,10],pip:11,plan:11,platform:11,plug:15,point:15,port:5,posit:5,post:5,pre:12,prefer:[2,5],preferred_languag:2,prefix:5,prepar:8,present:10,previous:10,primari:2,print:14,prioriti:[4,8],privat:4,process:[5,8],project:15,properti:[4,6],protocol:[1,2,3,4,5,6,7,8,9,10,12,13],protocol_scope_prefix:5,protocol_url:5,provid:[4,5,8,9,15],proxi:[5,13],proxy_password:[5,14],proxy_port:[5,14],proxy_serv:[5,14],proxy_usernam:[5,14],purpos:3,put:5,pypi:11,python:[11,14],pytz:5,queri:[2,4,6,7,9,10,16],quickli:16,rais:[1,2,5],raise_http_error:5,rang:4,reach:10,read:[1,2,5,6,8,11,14],readbas:14,readi:5,readwrit:[11,14],realm:14,reason:15,receiv:8,recent:6,recipi:[2,4,6,8],recipient_typ:2,recipienttyp:2,recommend:15,recurr:4,recurrence_time_zon:4,recurrence_typ:4,recycl:6,redirect:[5,11,14],redirect_uri:5,refresh:[5,6,7],refresh_fold:7,refresh_token:5,regist:[5,11],relat:[1,15],remind:4,remind_before_minut:4,remov:[3,4,8],repeat:4,repetit:4,repli:[8,14],reply_to:8,repres:[2,6,7,14],represent:[1,2,4,6,7,8],request:[2,4,5,6,7,9,10,15],request_dr:[6,9],request_retri:5,request_token:5,requested_scop:5,requests_delai:[5,6],requir:[2,4,5,6,14,15],require_sign_in:6,requisit:12,resourc:[1,2,3,4,5,6,7,8,9,12,13],respect:15,respond:5,respons:[4,5,15],response_request:4,response_statu:4,responsestatu:4,rest:5,restor:6,restrict:[2,4,8],restrict_kei:[2,4,8],result:[1,2,4,6,7,9,10,14,16,17],resuorc:15,retri:5,retriev:[2,4,6,7,9,10],revert:14,risk:11,role:6,root:[6,9,16],run:[3,11],runtimeerror:[1,2],same:10,save:[2,3,4,5,8,14],save_draft:8,save_to_sent_fold:8,schedul:[1,4,14],scope:[1,2,5,6,11,13],scope_help:5,search:[6,9,12,16],search_sit:9,search_text:6,second:[5,6],secret:11,section:[2,11,16],see:4,select:10,self:[1,4,5,7],send:[2,4,5,6,8,11,14,15],send_email:6,send_respons:4,sender:8,sensit:4,sent:[1,8,10],sent_fold:7,sentitem:[7,10],separ:9,sequenc:8,sequenti:6,server:[3,4,5,6,10,14],servic:[5,6,10,12,13,16],session:5,set:[2,3,4,5,6,7,8,9,10,11,12,13,15],set_daili:4,set_monthli:4,set_proxi:5,set_rang:4,set_weekli:4,set_yearli:4,setter:[2,3,4,8],setup:12,sever:6,share:[6,14,15],share_scop:6,share_typ:6,share_with_invit:6,share_with_link:6,shared_mail:14,shared_mailbox:15,sharepoint:[0,1,6,12,14,15],sharepoint_dl:14,sharepointlist:9,sharepointlistitem:9,shortcut:7,shorthand:5,should:[5,10],show:4,show_a:4,signatur:4,simpli:14,singl:[2,7,8,13],site:[1,9,14,15],site_collection_id:9,site_constructor:9,site_id:9,size:[2,4,6,7,9],size_thershold:6,slash:9,small:6,snake_cas:5,sole:3,some:[2,6,16],some_id_you_may_have_obtain:16,someon:14,someth:3,sourc:[1,2,3,4,5,6,7,8,9,10],special:6,specif:[2,4,14],specifi:[1,2,3,4,5,6,7,8,9,10,15],stabl:11,start:[4,10,12],start_dat:4,startswith:[10,16],statu:[4,5,6,8],step:11,stop:10,storag:[1,6,14],store:[1,4,5,6,7,8],store_token:5,str:[1,2,3,4,5,6,7,8,9,10],string:[3,6,8,9],structur:6,subject:[4,8],subsit:9,success:[1,2,3,4,5,6,7,8],suppli:[5,8],support:[1,6,14],surnam:2,system:5,target:6,target_fold:8,tent:4,tentativelyaccept:4,text:[4,6,8],than:[2,4,5,6,7,9,10,14],thei:[11,16],them:[3,4,5,16],therefor:3,thi:[1,2,3,4,5,6,7,8,9,10,14,15],through:[5,11],thumbnail:6,time:[2,4,5,6,8,14],timezon:[4,5],titl:2,to_al:8,to_api_cas:5,to_api_data:[2,3,4,8],to_fold:[2,6,7],to_path:6,todo:16,token:[1,5,14],token_file_nam:5,token_path:5,too:5,top:16,trackerset:10,transform:[5,10],tupl:[1,4,5,6,8,10],two:15,type:[1,2,3,4,5,6,7,8,9,10],unabl:7,under:[6,7,11,16],underli:3,unequ:10,unexpect:5,unknown:4,unless:[2,14],unsav:4,unstabl:11,until:10,updat:[2,4,5,6,7,8],update_folder_data:7,update_folder_nam:[2,7],update_parent_if_chang:7,update_rol:6,upload:6,upload_fil:6,url:[2,4,5,9,10,11,14,15],usag:12,use:[2,3,4,5,6,7,8,9,10,11,14,15],used:[1,2,5,6,10,15,16],useful:16,user:[1,2,3,4,5,6,11,14,15],user_provided_scop:5,usernam:[5,14],uses:[1,2,4,6,7,9],using:[2,4,5,8,10,11,14,15,16],usual:15,utc:5,util:[0,2,3,4,6,7,8,9,12,13],valu:[2,4,5,6,8,10],valueerror:[1,5],variou:[12,13,15],version:[5,6,11,15],version_id:6,view:6,wai:9,wait:[5,6],want:[6,14],web:11,week:4,well:[8,10,16],what:[2,4,11],when:[2,5,6,10,14],where:[2,3,5,6],whether:[4,5,7,8,10],which:[1,2,4,6,11,14,15],whole:4,whose:16,why:14,width:6,within:[9,10],without:5,word:[10,15],work:[1,15],workingelsewher:4,would:[10,14],wrapper:[4,8],write:14,yet:2,you:[2,6,11,14,15,16],your:[4,6,11,12,13,15]},titles:["O365 API","Account","Address Book","Attachment","Calendar","Connection","One Drive","Mailbox","Message","Sharepoint","Utils","Getting Started","Welcome to O365\u2019s documentation!","Detailed Usage","Account","Resources","Mailbox","Query"],titleterms:{One:6,Using:14,access:[14,16],account:[1,14],address:2,api:[0,14,15],attach:3,authent:14,basic:11,between:15,book:2,calendar:4,child:16,choos:15,connect:[5,14],detail:13,differ:14,document:12,drive:6,folder:16,get:[11,16],graph:15,indic:12,initi:15,instal:11,instanc:[14,15],mailbox:[7,16],messag:8,o365:[0,12],oauth:11,office365:15,pre:11,protocol:15,proxi:14,queri:17,requisit:11,resourc:[14,15],scope:14,servic:14,set:14,setup:11,sharepoint:9,singl:16,start:11,tabl:12,usag:[11,13],util:[10,15],variou:16,welcom:12,your:14}})