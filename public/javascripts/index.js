$('#send').on('click',function(){
	console.log($$c.initData.link.test)
	$.ajax({
        type: "post",
        url: $$c.initData.link.test,
        data: {
        	username:$('#username').val(),
        	t:23232323
        },
        dataType:'json' ,
        success: function(data){
            alert('success')
        },
        fail: function(){
        	alert('fail')
        },
        error: function(a,b,c){
        	console.log(a)
        	console.log(b)
        	console.log(c)
        }
    });
})