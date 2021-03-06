function close(done){
    $('.weui-dialog__btn').click();
    setTimeout(done, closeDur);
}

describe('alert', function(){
    this.timeout(0);

    it('should render alert', (done) => {
        const ctn = 'test render alert';
        weui.alert(ctn);

        let $alert = $('.weui-dialog');
        assert($alert.length === 1);

        assert($('.weui-dialog__bd').html() === ctn);

        close(done);
    });

    it('should render custom title', (done) => {
        const title = 'custom title';
        weui.alert('test render custom title', {
            title: title
        });

        assert($('.weui-dialog__title').html() === title);

        close(done);
    });

    it('should render custom btn', (done) => {
        const ctn = 'OK';
        weui.alert('test render custom btn', {
            title: 'custom btn',
            buttons: [{
                label: ctn,
                type: 'primary'
            }]
        });

        assert($('.weui-dialog__btn').html() === ctn);
        close(done);
    });

    it('test btn click', (done) => {
        let called = false;
        weui.alert('test btn click', () => {
            called = true;
        });

        $('.weui-dialog__btn').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(called);
            done();
        }, closeDur);
    });

    it('test custom btn click', (done) => {
        let called = false;
        weui.alert('test render custom btn', {
            title: 'custom btn',
            buttons: [{
                label: 'OK',
                type: 'primary',
                onClick: () => {
                    called = true;
                }
            }]
        });

        $('.weui-dialog__btn').click();
        setTimeout(() => {
            assert($('.weui-dialog').length === 0);
            assert(called);
            done();
        }, closeDur);
    });
});
