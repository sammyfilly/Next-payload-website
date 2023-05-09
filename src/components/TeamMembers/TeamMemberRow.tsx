import React from 'react'
import { Select } from '@forms/fields/Select'
import { Text } from '@forms/fields/Text'

import { userTeamRoles } from '@components/InviteTeammates'

import classes from './TeamMemberRow.module.scss'

export const TeamMemberRow: React.FC<{
  leader?: string
  email?: string
  roles?: ('owner' | 'admin' | 'user')[]
  footer?: React.ReactNode
}> = props => {
  const { email, leader, footer, roles } = props

  return (
    <div className={classes.member}>
      {leader && <p className={classes.leader}>{leader}</p>}
      <div className={classes.memberFields}>
        <Text disabled value={email} label="Email" />
        <Select isMulti disabled value={roles} label="Roles" options={userTeamRoles} />
      </div>
      <div className={classes.footer}>{footer}</div>
    </div>
  )
}
