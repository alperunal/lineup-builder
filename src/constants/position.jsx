import React from 'react';

export const Positions = {
  ST: {
    name: 'Striker',
    shortName: 'ST',
    roles: ['Poacher', 'Target Man', 'False 9', 'Complete Forward'],
    order: 13,
    dimensions: {
      x0: 85,
      x1: 265,
      y0: 0,
      y1: 120,
    },
  },
  WL: {
    name: 'Winger Left',
    shortName: 'WL',
    roles: ['Winger', 'Inside Forward'],
    order: 12,
    dimensions: {
      x0: 0,
      x1: 85,
      y0: 0,
      y1: 120,
    },
  },
  WR: {
    name: 'Winger Right',
    shortName: 'WR',
    roles: ['Winger', 'Inside Forward'],
    order: 11,
    dimensions: {
      x0: 265,
      x1: 350,
      y0: 0,
      y1: 120,
    },
  },
  AMC: {
    name: 'Attacking Midfielder Center',
    shortName: 'AMC',
    roles: ['Playmaker', 'Shadow Striker', 'Free Role'],
    order: 10,
    dimensions: {
      x0: 85,
      x1: 265,
      y0: 120,
      y1: 200,
    },
  },
  ML: {
    name: 'Midfielder Left',
    shortName: 'ML',
    roles: ['Winger', 'Wide Playmaker', 'Wide Midfielder'],
    order: 9,
    dimensions: {
      x0: 0,
      x1: 85,
      y0: 120,
      y1: 250,
    },
  },
  MC: {
    name: 'Midfielder Center',
    shortName: 'MC',
    roles: [
      'Attacking Midfielder',
      'Defensive Midfielder',
      'Box to Box',
      'Playmaker',
    ],
    order: 8,
    dimensions: {
      x0: 85,
      x1: 265,
      y0: 200,
      y1: 300,
    },
  },
  MR: {
    name: 'Midfielder Right',
    shortName: 'MR',
    roles: ['Winger', 'Wide Playmaker', 'Wide Midfielder'],
    order: 7,
    dimensions: {
      x0: 265,
      x1: 350,
      y0: 120,
      y1: 250,
    },
  },
  DMC: {
    name: 'Defensive Midfielder Center',
    shortName: 'DMC',
    roles: ['Defensive Midfielder', 'Playmaker'],
    order: 6,
    dimensions: {
      x0: 85,
      x1: 265,
      y0: 300,
      y1: 350,
    },
  },
  WBL: {
    name: 'Wing Back Left',
    shortName: 'WBL',
    roles: ['Wing Back'],
    order: 5,
    dimensions: {
      x0: 0,
      x1: 85,
      y0: 250,
      y1: 350,
    },
  },
  FBL: {
    name: 'Full Back Left',
    shortName: 'FBL',
    roles: ['Full Back'],
    order: 4,
    dimensions: {
      x0: 0,
      x1: 85,
      y0: 350,
      y1: 500,
    },
  },
  DC: {
    name: 'Defender Center',
    shortName: 'DC',
    roles: ['Ball Playing Defender', 'Stopper'],
    order: 3,
    dimensions: {
      x0: 85,
      x1: 265,
      y0: 350,
      y1: 430,
    },
  },
  WBR: {
    name: 'Wing Back Right',
    shortName: 'WBR',
    roles: ['Wing Back'],
    order: 2,
    dimensions: {
      x0: 265,
      x1: 350,
      y0: 250,
      y1: 350,
    },
  },
  FBR: {
    name: 'Full Back Right',
    shortName: 'FBR',
    roles: ['Full Back'],
    order: 1,
    dimensions: {
      x0: 265,
      x1: 350,
      y0: 350,
      y1: 500,
    },
  },
  GK: {
    name: 'Goalkeeper',
    shortName: 'GK',
    roles: ['Goalkeeper', 'Sweeper'],
    order: 0,
    dimensions: {
      x0: 85,
      x1: 265,
      y0: 430,
      y1: 500,
    },
  },
};

export class PositionArea {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  getStyle() {
    const pos = Positions[this.name];
    return {
      top: `${pos.dimensions.y0}px`,
      left: `${pos.dimensions.x0}px`,
      width: `${pos.dimensions.x1 - pos.dimensions.x0}px`,
      height: `${pos.dimensions.y1 - pos.dimensions.y0}px`,
    };
  }

  getArea() {
    return (
      <div
        style={{
          backgroundColor: this.color,
          position: 'absolute',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textShadow:
            '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
          opacity: '.5',
          ...this.getStyle(),
        }}
      >
        {this.name}
      </div>
    );
  }
}
