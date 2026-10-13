import './grid.css'

// Herbruikbaar 12-koloms CSS Grid systeem. GridItem-kolombreedte is instelbaar per
// breakpoint (span/sm/md/lg), vergelijkbaar met Bootstrap's row/col maar op CSS Grid.
function Grid({ children, gap, flush = false, className = '', as: Tag = 'div', ...rest }) {
  const style = gap ? { '--grid-gap': gap } : undefined
  const classes = ['grid', flush && 'grid--flush', className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  )
}

function GridItem({ children, span = 12, sm, md, lg, className = '', as: Tag = 'div', ...rest }) {
  const style = {
    '--span-base': span,
    ...(sm !== undefined && { '--span-sm': sm }),
    ...(md !== undefined && { '--span-md': md }),
    ...(lg !== undefined && { '--span-lg': lg }),
  }
  const classes = ['grid-item', className].filter(Boolean).join(' ')

  return (
    <Tag className={classes} style={style} {...rest}>
      {children}
    </Tag>
  )
}

export { Grid, GridItem }
