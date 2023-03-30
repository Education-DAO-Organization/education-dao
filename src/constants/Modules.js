import abi from '../assets/svg/modules/abi.svg'
import contractStructure from '../assets/svg/modules/contract-structure.svg'
import dataTypes from '../assets/svg/modules/data-types.svg'
import events from '../assets/svg/modules/events.svg'
import factoryContracts from '../assets/svg/modules/factory-contracts.svg'
import functions from '../assets/svg/modules/functions.svg'
import gas from '../assets/svg/modules/gas.svg'
import storage from '../assets/svg/modules/storage.svg'

export const MODULES = [
	{
		id: '',
		title: 'Introduction',
		slug: 'S00-intro',
		lessons: [
			{
				id: 'why-learn-blockchain',
				title: 'Why Learn Blockchain?',
				slug: 'L2-why-learn',
				type: 'text'
			},
			{
				id: 'tips-for-this-course',
				title: 'Tips For This Course',
				slug: 'L3-course-tips',
				type: 'text'
			},
			{
				id: 'technical-requirements',
				title: 'Technical Requirements',
				slug: 'L4-technical-requirements',
				type: 'text'
			},
			{
				id: 'for-advanced-students',
				title: 'For Advanced Students',
				slug: 'L7-advanced-students',
				type: 'text'
			}
		]
	},
	{
    id: '',
    title: 'Fundamentals',
    slug: 'S01-fundamentals',
    lessons: [
      {
				id: 'introduction-fundamentals',
        title: 'Introduction to Fundamentals',
        slug: 'M0-intro',
        type: 'text'
      },
      {
				id: 'public-key-cryptography',
        title: 'Decentralizing Identity: Public Key Cryptography',
        slug: 'M1-cryptography/L1-pub-key-crypto',
        type: 'video'
      },
      {
				id: 'working-with-private-and-public-keys',
        title: 'Additional Material: Working With Private and Public Keys',
        slug: 'M1-cryptography/L2-pub-key-crypto-additional',
        type: 'text'
      },
      {
				id: 'workspace-working-with-private-and-public-keys',
        title: 'Assignment: Working With Private and Public Keys',
        // TODO: Add assignment and test suite for a mock workspace file
        //       Need to ask best place to put it
        slug: '',
        type: 'workspace'
      },
      {
				id: 'video-hash-functions',
        title: 'Decentralizing File Integrity: Hash Functions',
        slug: 'M1-cryptography/L3-hashing/',
        type: 'video'
      },
      {
				id: 'hash-functions',
        title: 'Additional Material: Hash Functions',
        slug: 'M1-cryptography/L4-hashing-additional/',
        type: 'text'
      },
      {
				id: 'workspace-hash-functions',
        title: 'Assignment: Hash Functions',
      // TODO: Add assignment and test suite for a mock workspace file
      //       Need to ask best place to put it
        slug: '',
        type: 'workspace'
      },
      {
				id: 'video-digital-signatures',
        title: 'Decentralizing Intent: Digital Signatures',
        slug: 'M1-cryptography/L5-digital-sig',
        type: 'video'
      },
      {
				id: 'digital-signatures',
        title: 'Additional Material: Digital Signatures',
        slug: 'M1-cryptography/L6-digital-sig-additional',
        type: 'text'
      },
      {
				id: 'workspace-digital-signatures',
        title: 'Assignment: Digital Signatures',
      // TODO: Add assignment and test suite for a mock workspace file
      //       Need to ask best place to put it
        slug: '',
        type: 'workspace'
      },
      {
				id: 'fundamentals-playground',
        title: 'Cryptography Fundamentals Playground',
        slug: 'M1-cryptography/L7-crypto-fundamentals-playground/',
        type: 'text'
      }
    ]
  }
]
