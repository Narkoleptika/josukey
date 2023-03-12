module.exports = {
    params: {
        designator: 'S',
        reverse: true,
        r1: { type: 'net', value: 'r1' },
        r2: { type: 'net', value: 'r2' },
    },
    body: p => {
        const standard = `
            (footprint 434121025816 (layer F.Cu) (tedit 63B6D2D4)
            ${p.at /* parametric position */}
            (descr "<b>WS-TASV</B><BR>SMT Tact Switch 6.0x3.8 mm,2 pins")
            (fp_line (start -3.0 1.95) (end 3.0 1.95) (layer F.Fab) (width 0.1))
            (fp_line (start 3.0 1.95) (end 3.0 -1.95) (layer F.Fab) (width 0.1))
            (fp_line (start 3.0 -1.95) (end -3.0 -1.95) (layer F.Fab) (width 0.1))
            (fp_line (start -3.0 -1.95) (end -3.0 1.95) (layer F.Fab) (width 0.1))
            (fp_poly
                (pts
                (xy -4.2 -2.25)
                (xy 4.2 -2.25)
                (xy 4.2 2.25)
                (xy -4.2 2.25)
                ) (layer F.CrtYd) (width 0.1)
            )
        `
        function pins(def_neg, def_pos, def_side) {
            return `
                ${''/* pins */}
                    (pad 1 smd rect (at ${def_neg}3.25 0.0) (size 1.5 1.4) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) ${p.r1.str})
                    (pad 2 smd rect (at ${def_pos}3.25 0.0) (size 1.5 1.4) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) ${p.r2.str})
            `
        }
        function silk(def_side) {
            const negative = def_side === 'F' ? '-' : ''
            return `
                (fp_line (start -3.1 -1.1) (end -3.1 -2.05) (layer ${def_side}.SilkS) (width 0.2))
                (fp_line (start -3.1 -2.05) (end 3.1 -2.05) (layer ${def_side}.SilkS) (width 0.2))
                (fp_line (start 3.1 -2.05) (end 3.1 -1.1) (layer ${def_side}.SilkS) (width 0.2))
                (fp_line (start -3.1 1.1) (end -3.1 2.05) (layer ${def_side}.SilkS) (width 0.2))
                (fp_line (start -3.1 2.05) (end 3.1 2.05) (layer ${def_side}.SilkS) (width 0.2))
                (fp_line (start 3.1 2.05) (end 3.1 1.1) (layer ${def_side}.SilkS) (width 0.2))
                (fp_circle (center ${negative}2.6 ${negative}1.2) (end ${negative}2.5 ${negative}1.2) (layer ${def_side}.SilkS) (width 0.2))
            `
        }
        if (p.reverse) {
            return `
                ${standard}
                ${pins('-', '', 'B')}
                ${silk('B')}
                ${pins('', '-', 'F')}
                ${silk('F')})
                `
            } else {
                return `
                ${standard}
                ${pins('-', '', 'B')}
                ${silk('B')})
            `
        }
    }
}

