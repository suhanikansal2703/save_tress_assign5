
var imgs = ['https://media.istockphoto.com/id/1351442130/photo/multiracial-volunteers-planting-in-public-park.jpg?b=1&s=170667a&w=0&k=20&c=8LT6YooW89fJOnMfxSaVGVDdNUtiJE-LNypOxoYPZTU=',
'https://media.istockphoto.com/id/1391207364/photo/large-and-small-pieces-of-pruned-wood-are-stacked-on-the-grass.jpg?b=1&s=170667a&w=0&k=20&c=FbVX9a9_vP-mfluGxdf8oYwkaKjIAoaXCzzxTVLNarU=',
'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
'https://media.istockphoto.com/id/1367176207/photo/they-love-their-work.jpg?b=1&s=170667a&w=0&k=20&c=OzeJ9gdbtncCvA2lNy51pL4FaXk1DsrFI1620qbWA3k=',
'https://media.istockphoto.com/id/1314925308/photo/two-men-planted-a-tree.jpg?b=1&s=170667a&w=0&k=20&c=BAxzygPlMuD9dLDmsOKysRKFUitVc2Kkd3SSOlWFatM='];

var rsns = [
    'Trees provide us Oxygen to survive',
    'Trees give us food and shelter',
    'Trees are habitat for many animal species',
    'Forests help in prevention of soil erosion',
    'Trees are the cause of precipitation'
]
var i=0;
function next(){
    if(i>=rsns.length){
    i=0;
    }
    document.getElementById('reasons').innerHTML=rsns[i];
    document.getElementById('img1').src=imgs[i];
    i++;

}



