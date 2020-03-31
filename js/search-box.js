function SearchEnsureSOD() {
    EnsureScript('search.js', typeof (GoSearch));
}
_spBodyOnLoadFunctionNames.push('SearchEnsureSOD');

function S8AF30516_Submit() {
    if (document.getElementById('ctl00_PlaceHolderSearchArea_g_06619f37_9d02_447f_8d64_157258ba5b1d_ctl03').value ==
        '0') {
        document.getElementById(
                'ctl00_PlaceHolderSearchArea_g_06619f37_9d02_447f_8d64_157258ba5b1d_S8AF30516_InputKeywords').value =
            '';
    }
    SearchEnsureSOD();
    GoSearch('ctl00_PlaceHolderSearchArea_g_06619f37_9d02_447f_8d64_157258ba5b1d_ctl03',
        'ctl00_PlaceHolderSearchArea_g_06619f37_9d02_447f_8d64_157258ba5b1d_S8AF30516_InputKeywords', null, true,
        false, null, null, null, null, null, '\u002fSearch\u002fResults.aspx', 'This Site', 'This List',
        'This Folder', 'Related Sites', '\u002fstudents\u002fcs\u002f_layouts\u002fOSSSearchResults.aspx', '',
        'Please enter one or more search words.');
    if (document.getElementById('ctl00_PlaceHolderSearchArea_g_06619f37_9d02_447f_8d64_157258ba5b1d_ctl03').value ==
        '0') {
        document.getElementById(
                'ctl00_PlaceHolderSearchArea_g_06619f37_9d02_447f_8d64_157258ba5b1d_S8AF30516_InputKeywords').value =
            'Search';
    }
}
// 