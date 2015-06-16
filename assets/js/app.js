/**
 * Created by gera on 15.06.15.
 */
/* ============================================================
 * Pages Portlet (mainly for demo index_2 exactly)
 * ============================================================ */

$(function() {
    'use strict';
    // PORTLET CLASS DEFINITION
    // ======================

    var Portlet = function(element, options) {
        this.$element = $(element);
        this.options = $.extend(true, {}, $.fn.portlet.defaults, options);
        this.$loader = null;
        this.$body = this.$element.find('.panel-body');

        // Fix for FF: pre-loading animated to SVGs
        this.$loaderSVG = this.$loaderSVG || $('<img src="pages/img/progress/progress-' + this.options.progress + '-' + this.options.progressColor + '.svg" style="display:none">').appendTo(this.$element);
    }
    Portlet.VERSION = "1.0.0";

    // PORTLET PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('pg.portlet');
            var options = typeof option == 'object' && option;

            if (!data) $this.data('pg.portlet', (data = new Portlet(this, options)));
            if (typeof option == 'string') data[option]();
            else if (options.hasOwnProperty('refresh')) data.refresh(options.refresh);
            else if (options.hasOwnProperty('error')) data.error(options.error);
        })
    }

    var old = $.fn.portlet;

    $.fn.portlet = Plugin;
    $.fn.portlet.Constructor = Portlet;


    $.fn.portlet.defaults = {
        progress: 'circle',
        progressColor: 'master',
        refresh: false,
        error: null,
        overlayColor: '255,255,255',
        overlayOpacity: 0.8
        // onRefresh: function() {},
        // onCollapse: function() {},
        // onExpand: function() {},
        // onMaximize: function() {},
        // onRestore: function() {},
        // onClose: function() {}
    };

    // Draggable portlets are rendered using jQuery Sortable plugin
    if (!jQuery().sortable) {
        return;
    }
    $(".sortable").sortable({
        connectWith: '.sortable',
        iframeFix: false,
        items: 'div.panel',
        opacity: 0.8,
        helper: 'original',
        revert: true,
        forceHelperSize: true,
        placeholder: 'sortable-box-placeholder round-all',
        forcePlaceholderSize: true,
        tolerance: 'pointer'
    });

});
/* ============================================================
 * Equal Height of Columns (mainly for demo index_2 exactly)
 * ============================================================ */
$(function() {
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }
    //setEqualHeight($(".row > .panel"));
    //setEqualHeight($(".panel_table-row-large > div"));
    setEqualHeight($(".panel_table > .panel_table-column"));
});

/* ============================================================
 * Tooltip Plugin and Tooltips for a buttons
 * ============================================================ */
$(function() {
    function initTooltipPlugin() {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip();
    }
    initTooltipPlugin();
    $("#newDocument").tooltip({
        title : 'new document',
        template: '<div class="tooltip" role="tooltip">' +
        '<div class="tooltip-inner  tooltip-custom"></div>' +
        '</div>'
    });
    $("#copyDocument").tooltip({
        title : 'copy document',
        template: '<div class="tooltip" role="tooltip">' +
        '<div class="tooltip-inner  tooltip-custom"></div>' +
        '</div>'
    });
    $("#cart").tooltip({
        title : 'add to the cart',
        template: '<div class="tooltip" role="tooltip">' +
        '<div class="tooltip-inner  tooltip-custom"></div>' +
        '</div>'
    });
});
/* ============================================================
 * bottom plus-button
 * ============================================================ */
$(function() {
    $('#plusButton').on('click', function() {
        $(this).button('toggle');
        $('.bottom-button-group').toggleClass('show');
        $('#variable-icon').toggleClass('icon-add').toggleClass('icon-close');
    });
    $("button").focus( function() {
        this.blur();
    });
});
/* ============================================================
 * validation form for name
 * ============================================================ */
$(function() {
    $('#save').click(function() {
        var formValid = true;

        $('#validate-name input').each(function() {
            var val = $(this).val();

            if (val.length > 4 && val != '') {
                $('div.label').addClass('has-success').removeClass('has-error').children().remove();
            } else {
                $('div.label').html("<span>This field is required.</span>" +
                "<span class='fa fa-warning pull-right'></span>").addClass('has-error').removeClass('has-success');
                formValid = false;
            }
        });

        if (formValid) {
            $('#share').modal('hide');
        }
    });
});

/* ============================================================
 * activate plugins - switchery, powerange
 * ============================================================ */
$(function() {
    //switchery
    var elem = document.querySelector('.js-switch');
    var switchery = new Switchery(elem, { size: 'small', color: '#99cdef',
        secondaryColor: '#269abc', jackColor: '#fff', jackSecondaryColor: '#269abc' });
    //powerange
    /*var elem = document.querySelector('.js-range');
    var init = new Powerange(elem, { min: 0, max: 100, start: 28 });
    // Basic customization.
    var cust = document.querySelector('.js-customized');
    var initCust = new Powerange(cust, { hideRange: true, klass: 'power-ranger', start: 60 });

    // Min, max, start.
    var vals = document.querySelector('.js-min-max-start');
    var initVals = new Powerange(vals, { min: 16, max: 256, start: 128 });

    */
});