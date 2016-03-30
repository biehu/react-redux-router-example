import React from 'react';
import AppTab from '../common/appTab';

export default class Tab extends React.Component {
	onMount(selectedIndex, selectedPanel, selectedTabMenu) {
		console.log('on mount, show' + selectedIndex);
	}
	
	onBeforeChange(selectedIndex, selectedPanel, selectedTabMenu) {
		console.log('before the tab ' + selectedIndex);
	}
	
	onAfterChange(selectedIndex, selectedPanel, selectedTabMenu) {
		console.log('after the tab ' + selectedIndex);
	}
	
    render() {
        return (
		    <AppTab
			    tabActive={2}
				onBeforeChange={this.onBeforeChange}
				onAfterChange={this.onAfterChange}
				onMount={this.onMount}>
				<div title='tab #1'>
				    <h2>Content #1</h2>
				</div>
				<div title='tab #2'>
                    <h2>Content #2</h2>
                </div>
				<div title='tab #3'>
                    <h2>Content #3</h2>
                </div>
			</AppTab>
		);
    }
};
