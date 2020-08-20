const playbookRoute = '/playbook';

export const paths = {
    root: '/',
    lineup: '/lineup',
    playbook: playbookRoute,
};

export const playbookPaths = {
    profile: `${playbookRoute}/profile/:id`,
    tactics: `${playbookRoute}/tactic`,
    tactic: `${playbookRoute}/tactic/:id`,
};
