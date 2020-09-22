( function()

{

    if( app.documents.length == 0 ){ return };

    var aDoc = app.activeDocument;   

    var abIdx = aDoc.artboards.getActiveArtboardIndex();

    var abName = prompt( "Rename Active Artboard" + "\n" + "Enter a new name:", "Job Jacket" );

   

    // User pressed the Cancel button:

    if( abName == null ){ return };

   

    aDoc.artboards[abIdx].name = abName;

   

}() )

//link https://community.adobe.com/t5/illustrator/automatically-rename-current-artboard-to-something-else/td-p/10415626?page=1
