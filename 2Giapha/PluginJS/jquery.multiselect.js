$.fn.multiSelect = function(options){
    // Default options
    var settings = $.extend({
        label: ''
    }, options );

    var wrap = this,
        selectEl = wrap.children("select"),
        inputEl = wrap.children("input");

    var mainEl = $("<div></div>").addClass("multiselect-wrap"),
        selectedEl = $("<div></div>").addClass("multiselect-selected").text(settings.label),
        listEl = $("<div></div>").addClass("multiselect-list").css("display","none");

    var selectedVal = [];
    selectEl.find("option").each(function(){
        var option = $(this);
        var optionEl = $("<div></div>").text(option.text()).attr('data-val', option.val());
        optionEl.appendTo(listEl);
        
        var te = '' + option.text();
        var sele = option.attr('selected');
        if(sele == 'selected'){
            var span = $("<span></span>").text(te);
            span.appendTo(selectedEl);
            optionEl.attr('class', 'selected-option');
        }

        optionEl.on('click',function(){
            var clasname = $(this).attr('class');
            if(clasname === 'selected-option'){
                $(this).attr('class', '');
                 option.removeAttr('selected');
            } else{
                $(this).attr('class', 'selected-option');
                 option.attr('selected', 'true');
            }
         //   $(this).toggleClass("selected-option"); 
            selectedEl.empty();
            
            listEl.find(".selected-option").each(function(){
                var $this = $(this),
                span = $("<span></span>").text($this.text());
                span.appendTo(selectedEl);
                
                selectedVal.push($this.attr('data-val'));
            });

            if (inputEl.length > 0 ) {
                inputEl.val(selectedVal.join(","));
            }
        });
    });

    selectedEl.on("click",function(){
        if (listEl.hasClass("multi-list-opened")) {
            listEl.slideUp(function(){
                listEl.removeClass('multi-list-opened')
            });
        } else {
            listEl.slideDown(function(){
                listEl.addClass('multi-list-opened')
            });
        }
    });
    mainEl.append(selectedEl).append(listEl);
    wrap.append(mainEl);
    selectEl.hide();

    $('html').click(function(e) {                    
        if(!$(e.target).is(wrap) && !$(e.target).is(listEl) && !$(e.target).is(selectedEl) && !$(e.target).is(mainEl) && !$(e.target).is(listEl.children()) && !$(e.target).is(selectedEl.children()) )
        {          
            if ( listEl.hasClass("multi-list-opened")){
           //     console.log("html event");
                listEl.slideUp(function(){
                    listEl.removeClass('multi-list-opened');
                });
            }
        }
    }); 
    return this;
};
