$(document).ready(function(){	
	$('select').each(function(index){
		var select_option_count = $(this).children().length;
		
		if(select_option_count > 10){
			if(!$(this).hasClass('select2') && !$(this).hasClass('cs-select')){
				$(this).addClass('select2');
			}
		}else{
			if(!$(this).hasClass('select2-wrapper') && !$(this).hasClass('cs-select')){
				$(this).addClass('select2-wrapper');
			}
		}
	});
	
	$('select.select2').select2();	
	$(".select2-wrapper").select2({minimumResultsForSearch: -1});
	
	$('select').change(function(){
		$(this).removeClass('error');
		$(this).next('span.error').remove();
	});

	//HTML5 editor
	$('.text-editor').wysihtml5();
	$('.text-editor2').wysihtml5();
	$('.text-editor3').wysihtml5();
	$('.text-editor4').wysihtml5();

	$.validator.addMethod('comboboxNotNone', function(value, element) {
        return (value != '0');
    }, 'Please select an option.');
	
	$.validator.addMethod('lessthan', function(value, element) {
        return (value > '0');
    }, 'Please enter valid value.');

	$("#show_tp").timepicker({
		showLeadingZero: true
	});

	$("#show_dp").datepicker({
		autoclose: true,
		forceParse: false,
		format: 'D dd MM yyyy'
	});

	$("#show_dp_invoice_due_date").datepicker({
		autoclose: true,
		forceParse: false,
		format: 'dd MM yyyy'
	});

	$("#show_dp_invoice_date").datepicker({
		autoclose: true,
		forceParse: false,
		format: 'dd MM yyyy'
	});
	
    $( document ).ready(function() {
        $(".wysihtml5-sandbox").css("resize", "vertical");
    });


	$(document).on('change','#date', function (ev) {
		//alert('fsf');
		//alert($(this).attr('name'));
		$(this).removeClass('error');
		$(this).next('span.error').remove();
	});
	
	$("#date_year").datepicker( {
		autoclose: true,
		forceParse: false,
		format: " yyyy",
		viewMode: "years", 
		minViewMode: "years"
	});

	$("#add_brand_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			brand_name:{				
				required:true
			}
		},
		messages: {
			brand_name: "Please enter brand name"
		}
	});

	$("#add_banner_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
	});

	$("#add_user_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			user_roll_id: {
				comboboxNotNone: true
			},
			first_name:{				
				required:true
			},
			last_name:{				
				required:true
			},
			email:{				
				required:true,
				email: true
			},
			username:{				
				required:true
			},			
			password:{				
				required:true
			},
			password_confirm: {
				required:true,
				equalTo: "#reg_password"
			}
		},
		messages: {
			user_roll_id: "Please select role",
			first_name: "Please enter your first name",
			last_name: "Please enter your last name",
			email: "Please enter your email",
			username: "Please enter username",
			password: "Please enter password"
		}
	});
	$("#add_client_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			user_roll_id: {
				comboboxNotNone: true
			},
			first_name:{				
				required:true
			},
			last_name:{				
				required:true
			},
			email:{				
				required:true,
				email: true
			},
			username:{				
				required:true
			},			
			password:{				
				required:true
			},
			password_confirm: {
				required:true,
				equalTo: "#reg_password"
			}
		},
		messages: {
			user_roll_id: "Please select role",
			first_name: "Please enter your first name",
			last_name: "Please enter your last name",
			email: "Please enter your email",
			username: "Please enter username",
			password: "Please enter password"
		}
	});

	$("#add_order_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			order_status: {
				comboboxNotNone: true
			},
			
		},
		messages: {
			order_status: "Please select order status",
		}
	});

	$("#add_invoice_form_datatable").validate({
		
		rules: {
			company: {
				comboboxNotNone: true
			},
			
		},
		messages: {
			company: "Please select company",
		}
	});
	$("#add_supplier_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			name: {
				required: true
			},
			contact_person: {
				required: true
			},
			email:{				
				required:true,
				email: true
			},
			address:{				
				required:true
			},
			mobile_phone:{				
				required:true
			},
			phone:{				
				required:true
			}
		},
		messages: {
			name: "Please select name",
			email: "Please enter your email",
			address: "Please enter your address",
			email: "Please enter your email",
			contact_person: "Please enter contact person",
			mobile_phone: "Please enter mobile phone",
			phone: "Please enter phone",
			fax: "Please enter fax"
		}
	});

	$("#add_product_form_datatable").submit(function(){
		var flag = 0;

		var product_name = $('#reg_product_name').val();
		if(product_name == ""){
			flag = 1;
			$('#reg_product_name-error').show();
			$('.reg_product_name_js_class').addClass('has-error');
		}

		var product_code = $("#reg_product_code").val();
		if(product_code == ""){
			flag = 1;
			$('#reg_product_code-error').show();
			$('.reg_product_code_js_class').addClass('has-error');
		}
		
		var product_category = $('#product_categories option:selected').val();
		if(product_category == "" || product_category == 0){
			flag = 1;
			$('#reg_product_categories-error').show();
			$('.reg_product_categories_js_class').addClass('has-error');
		}

		var suppliers_name = $('#suppliers_name option:selected').val();
		if(suppliers_name == "" || suppliers_name == 0){
			flag = 1;
			$('#suppliers_name-error').show();
			$('.suppliers_name_js_class').addClass('has-error');
		}

		/*var sub_category = $('#sub_category option:selected').val();
		if(sub_category == "" || sub_category == 0){
			flag = 1;
			$('#sub_category-error').show();
			$('.sub_category_js_class').addClass('has-error');
		}*/

		var product_sku = $("#product_sku").val();
		if(product_sku == ""){
			flag = 1;
			$('#product_sku-error').show();
			$('.product_sku_js_class').addClass('has-error');
		}

		var total_quantity = $("#total_quantity").val();
		if(total_quantity == ""){
			flag = 1;
			$('#total_quantity-error').show();
			$('.total_quantity_js_class').addClass('has-error');
		}

		var selling_price = $("#reg_selling_price").val();
		if(selling_price == ""){
			flag = 1;
			$('#reg_selling_price-error').show();
			$('.reg_selling_price-js_class').addClass('has-error');
		}
		var product_brand = $("#product_brand").val();
		if(product_brand == "" || product_brand == 0 ){
			flag = 1;
			$('#reg_product_brand-error').show();
			$('.reg_product_brand_js_class').addClass('has-error');
		}
		
		var product_short_desc = $('#reg_product_short_desc').val();
		
		if(product_short_desc == ""){
			flag = 1;
			$('#reg_product_short_desc-error').show();
			$('.reg_product_short_desc_class').addClass('has-error');
		}

		
		if(flag == 1){
			return false;
		}
	})

	
	$("#add_promotion_form_datatable").submit(function(){

		var flag = 0;
		var promotion_header = $('#promotion_header').val();

		if(promotion_header = "" || promotion_header == 0 ){
			flag = 1;
			$('#promotion_header-error').show();
			$('.promotion_header_js_class').addClass('has-error');
		}

		var product_name_sale = $('#product_name_sale').val();
		if(product_name_sale = "" || product_name_sale == 0 ){
			flag = 1;
			$('#reg_product_name-error').show();
			$('.reg_product_name_js_class').addClass('has-error');
		}

		var offer_price = $('#offer_price').val();
		if(offer_price = "" || offer_price == 0 ){
			flag = 1;
			$('#offer_price-error').show();
			$('.offer_price_js_class').addClass('has-error');
		}

		if(flag == 1){
			return false;
		}
	})

	$("#add_product_form_datatable").validate({
		// submitHandler: function(form) {
		// 	jQuery(form).ajaxSubmit({
		// 		success: function(data){
		// 			if(data == ''){
		// 				$('#myModal').delay(1000).modal('hide');
		// 				parent.reload_datatable();
		// 			}else{
		// 				$(".containerfdfdf").show();
		// 				$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
		// 			}
		// 		}
		// 	});
			
		// },
		// rules: {
		// 	product_name: {
		// 		required: true
		// 	},
		// 	product_code: {
		// 		required: true
		// 	},
		// 	product_price:{				
		// 		required:true
		// 	},
		// 	product_categories: {
		// 		comboboxNotNone: true
		// 	},
		// 	sub_category: {
		// 		comboboxNotNone: true
		// 	},
		// 	product_sku:{				
		// 		required:true
		// 	},
		// 	total_quantity: {
		// 		required:true,
		// 		min: 1,
		// 		digits: true,
		// 	},
		// 	selling_price :{
		// 		required : true,
		// 	}
		// },
		messages: {
			product_name: "Please enter product name",
			product_code: "Please select product code",
			product_price: "Please enter your product price",
			sub_category: "Please select your your product sub category",
			product_categories: "Please select your product category",
			product_sku: "Please enter your product sku",
			selling_price: "Please enter your selling price",
			total_quantity: {
				min: "Value must be greater than Zero",
				required :"Please enter valid quantity digit",
			}
		}
	});

	$("#add_sub_category_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			product_categories:{				
				comboboxNotNone:true
			},
			sub_category_name:{				
				required:true
			}
		},
		messages: {
			
			sub_category_name: "Please enter your sub category",
			product_categories: "Please select your product category",
			
		}
	});

	$("#add_category_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
					}
				}
			});
			
		},
		rules: {
			category_name:{				
				required:true
			},
			
		},
		messages: {
			category_name: "Please enter your category name",
		}
	});

	$('#btn_user_password_update').click(function(event) {

		if($('#user_password').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter password.</label></span>');
		    return false;
		}
		else if($('#user_password_confirm').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter Confirm password.</label></span>');
		    return false;
		}
		else if($('#user_password').val() != $('#user_password_confirm').val())
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">password & confirm pass must be same.</label></span>');
		    return false;
		}
		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'user_password' 	: $('#user_password').val(),
			'user_password_confirm' 	: $('#user_password_confirm').val(),
			'user_id' 	: $('input[name=user_id]').val()
		};
		
		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: CI.base_url+'list_user/save_user_pass', // the url where we want to POST
			data 		: formData, // our data object
			success: function(data) {
				$('#error_div').html('');
				$('#message_div').html('<div class="alert alert-success"><button data-dismiss="alert" class="close"></button>'+data+'</div>');
				$('#user_password').val('');
				$('#user_password_confirm').val('');
			}
		});
		
		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

	$('#btn_supplier_password_update').click(function(event) {

		if($('#supplier_password').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter password.</label></span>');
		    return false;
		}
		else if($('#supplier_password_confirm').val() == "")
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">Please enter Confirm password.</label></span>');
		    return false;
		}
		else if($('#supplier_password').val() != $('#supplier_password_confirm').val())
		{
			$('#error_div').html('<span class="error"><label for="" generated="true" class="error">password & confirm pass must be same.</label></span>');
		    return false;
		}
		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'supplier_password' 	: $('#supplier_password').val(),
			'supplier_password_confirm' 	: $('#supplier_password_confirm').val(),
			'supplier_id' 	: $('input[name=supplier_id]').val()
		};
		
		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: CI.base_url+'admin/suppliers/save_supplier_pass', // the url where we want to POST
			data 		: formData, // our data object
			success: function(data) {
				$('#error_div').html('');
				$('#message_div').html('<div class="alert alert-success"><button data-dismiss="alert" class="close"></button>'+data+'</div>');
				$('#supplier_password').val('');
				$('#supplier_password_confirm').val('');
			}
		});
		
		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});
	
	$("#add_role_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
						
					}
				}
			});
			
		},
		rules: {
			user_roll_name: {
				required: true
			}
		},
		messages: {
			user_roll_name: "Please enter role."
		}
	});

	$("#add_cms_form_datatable").submit(function(){
		var flag = 0;

		var cms_name = $('#cms_name').val();

		if(cms_name == ""){
			flag = 1;
			$('#reg_cms_name-error').show();
			$('.reg_cms_name_js_class').addClass('has-error');
		}

		var content = $('#summernote').code();
		if(content == ""){
			flag = 1;
			$('#reg_cms_contant-error').show();
			$('.reg_cms_contant_js_class').addClass('has-error');
		}
		
		if(flag == 1){
			return false;
		}
	})
	/*$("#add_cms_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){
					if(data == ''){
						$('#myModal').delay(1000).modal('hide');
						parent.reload_datatable();
					}else{
						$(".containerfdfdf").show();
						$(".containerfdfdf").html('<div class="alert alert-danger" role="alert"><button class="close" data-dismiss="alert"></button>'+data+'</div>');
						
					}
				}
			});
			
		},
		rules: {
			cms_name: {
				required: true
			},
			cms_description: {
				required: true
			}
		},
		messages: {
			cms_name: "Please enter Name.",
			cms_description: "Please enter Discription."
		}
	});*/

	$("#add_gst_form_datatable").validate({
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit({
				success: function(data){

				}
			});
			
		},
		rules: {
			gst: {
				required: true,
				number:true
			},
			web_site_contact_email: {
				required:true,
				email: true
			}
		},
		messages: {
			gst:{
				number : "Please enter only GST number Tax.",
				required :"Please enter gst tax.",
			},
			web_site_contact_email: "Please enter web site mail."
		}
	});

});
