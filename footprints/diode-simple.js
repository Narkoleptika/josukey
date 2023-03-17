module.exports = {
    params: {
        designator: 'D',
        from: {type: 'net', value: 'from'},
        to: {type: 'net', value: 'to'}
    },
    body: p => `

        (module ComboDiode (layer F.Cu) (tedit 5B24D78E)
            ${p.at /* parametric position */}
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${''/* diode symbols */}
            (fp_line (start 0.25 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
            (fp_line (start 0.25 0.4) (end -0.35 0) (layer F.SilkS) (width 0.1))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer F.SilkS) (width 0.1))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (layer F.SilkS) (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 0.55) (layer F.SilkS) (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 -0.55) (layer F.SilkS) (width 0.1))
            (fp_line (start -0.75 0) (end -0.35 0) (layer F.SilkS) (width 0.1))
            (fp_line (start 0.25 0) (end 0.75 0) (layer B.SilkS) (width 0.1))
            (fp_line (start 0.25 0.4) (end -0.35 0) (layer B.SilkS) (width 0.1))
            (fp_line (start 0.25 -0.4) (end 0.25 0.4) (layer B.SilkS) (width 0.1))
            (fp_line (start -0.35 0) (end 0.25 -0.4) (layer B.SilkS) (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 0.55) (layer B.SilkS) (width 0.1))
            (fp_line (start -0.35 0) (end -0.35 -0.55) (layer B.SilkS) (width 0.1))
            (fp_line (start -0.75 0) (end -0.35 0) (layer B.SilkS) (width 0.1))

            ${''/* SMD pads on both sides */}
            (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.to.str})
            (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.from.str})
            (pad 1 smd rect (at -1.65 0 ${p.rot}) (size 0.9 1.2) (layers B.Cu B.Paste B.Mask) ${p.to.str})
            (pad 2 smd rect (at 1.65 0 ${p.rot}) (size 0.9 1.2) (layers F.Cu F.Paste F.Mask) ${p.from.str})

            ${''/* THT terminals */}
            (pad 1 thru_hole circle (at 0 0 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.to.str})
            (pad 2 thru_hole circle (at 3 0 ${p.rot}) (size 0.6 0.6) (drill 0.3) (layers *.Cu) (zone_connect 2) ${p.from.str})
        )

        (segment (start ${p.xy(-1.65, 0)}) (end ${p.xy(0, 0)}) (width 0.25) (layer "F.Cu") (net ${p.to.index}))
        (segment (start ${p.xy(-1.65, 0)}) (end ${p.xy(0, 0)}) (width 0.25) (layer "B.Cu") (net ${p.to.index}))
        (segment (start ${p.xy(1.65, 0)}) (end ${p.xy(3, 0)}) (width 0.25) (layer "F.Cu") (net ${p.from.index}))
        (segment (start ${p.xy(1.65, 0)}) (end ${p.xy(3, 0)}) (width 0.25) (layer "B.Cu") (net ${p.from.index}))
    `
}