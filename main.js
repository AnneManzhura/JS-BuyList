$(function(){

    var $list= $(".items");
    var $needed_items= $(".needed_purchases");
    var $bought_items= $(".done_purchases");
    var $new_input= $(".input");

    var ONE_ROW_HTML = $(".one_row_template").html();
    var ONE_NEEDED_ITEM_HTML = $(".one_needed_item_template").html();
    var ONE_BOUGHT_ITEM_HTML = $(".one_bought_item_template").html();

    function addItem(title){
        var $node = $(ONE_ROW_HTML);
        var needed_item=$(ONE_NEEDED_ITEM_HTML);
        var bought_item=$(ONE_BOUGHT_ITEM_HTML);
        var quantity=1;
        var $quantity_label=$node.find(".label_count");

        $quantity_label.text(quantity);

        $node.find(".title").text(title);

        $list.append($node);
        $node.hide();
        $node.slideDown(function () {
            $node.show();
        });
        $bought_items.append(bought_item);
        $needed_items.append(needed_item);
        bought_item.hide();

        needed_item.find(".name").text(title);
        needed_item.find(".circles").text(quantity);
        bought_item.find(".name").text(title);
        bought_item.find(".circles").text(quantity);


        $node.find(".but_plus").click(function () {
            quantity+=1;
            needed_item.find(".circles").text(quantity);
            bought_item.find(".circles").text(quantity);
            $node.find(".label_count").fadeOut(100, function () {
            $quantity_label.text(quantity);
            $node.find(".label_count").fadeIn(100);
            });

        });

        $node.find(".but_minus").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                needed_item.find(".circles").text(quantity);
                bought_item.find(".circles").text(quantity);
                $node.find(".label_count").fadeOut(100, function () {
                $quantity_label.text(quantity);
                $node.find(".label_count").fadeIn(100);
                });
            }
        });

        $node.find(".bl_delete").click(function(){
            $node.slideUp(function () {
                $node.remove();
            });
            needed_item.remove();
            bought_item.remove();
        });

        $node.find(".bl_toBuy").click(function () {

            needed_item.hide();
            bought_item.show();

            $node.find(".inner_item").fadeOut(200, function () {
                $node.find(".bl_toBuy").addClass("none");
                $node.find(".but_minus").addClass("hidden");
                $node.find(".but_plus").addClass("hidden");
                $node.find(".title").addClass("crossed");
                $node.find(".bl_delete").addClass("none");
                $node.find(".bl_toUnBuy").addClass("visible");
                $node.find(".inner_item").fadeIn(200);
            });
        });

        $node.find(".bl_toUnBuy").click(function(){
            needed_item.show();
            bought_item.hide();
            $node.find(".inner_item").fadeOut(200, function () {
                $node.find(".bl_toBuy").removeClass("none");
                $node.find(".bl_toUnBuy").removeClass("visible");
                $node.find(".but_minus").removeClass("hidden");
                $node.find(".but_plus").removeClass("hidden");
                $node.find(".title").removeClass("crossed");
                $node.find(".bl_delete").removeClass("none");
                $node.find(".inner_item").fadeIn(200);
            });


        });

 /*       $node.find(".title").click(function(){
            $node.find(".title").addClass("none");
            $node.find(".title_edit").attr("value", title);

            $node.find(".title_edit").addClass("visible");
            $node.find(".title_edit").focus();

        });
        $node.find(".title_edit").focusout(function(){
            var new_name= $(this).val();
            alert(new_name);
            $node.find(".title_edit").removeClass("visible");
            $node.find(".title").text($(this).val());
            $node.find(".title").removeClass("none");

        });*/


    /*    $node.find(".title_edit").change(function () {
            var new_name= $(this).val();
            alert(new_name);

        });*/




    }




    $(".but_toAdd").click(function(){
        var new_node= $new_input.val().trim();
        if($new_input.val().trim()!=="") {
            addItem(new_node);
            $new_input.focus();
        }
        $new_input.val("");
    });

    $(document).keypress(function(e) {
        if(e.which === 13) {
            var new_node= $new_input.val().trim();
            if($new_input.val().trim()!==""){

                addItem(new_node);
                $new_input.focus();
            }
            $new_input.val("");

        }
    });


     /* EXAMPLES*/
    addItem("Помідори");
    addItem("Огірки");
    addItem("Сир");

});