loaded_file = [
    'area_interchanges', 
    'buses', 
    'facts', 
    'fixed_shunts', 
    'generators', 
    'hvdc_lines', 
    'induction_machines', 
    'interarea_transfers', 
    'lines', 'loads', 
    'multi_section_line', 
    'multi_terminal_hvdc_lines', 
    'owners', 'switched_shunts', 
    'switching_devices', 
    'system_info', 
    'transformer_tables', 
    'transformers', 
    'vsc_dc_lines', 
    'zones'
];
loaded_file[‘buses’][0] = { // only need 'number'
    'area': 1, 
    'baskv': 138, 
    'evhi': 1.1, 
    'evlo': 0.9, 
    'infeasIi': 0, 
    'infeasIr': 0, 
    'infeasP': 0, 
    'infeasQ': 0, 
    'is_dangling': False, 
    'lat': 0, 
    'lon': 0, 
    'name': "'NEAH BAY 1  '",
    'number': 10001,
    'nvhi': 1.1,
    'nvlo': 0.9, 
    'owner': 1, 
    'type': 1, 
    'va': -39.151686, 
    'vm': 1.01167512, 
    'zone': 1
}; 
loaded_file[‘lines’][0] = { // only need 'i' and 'j'
    'b': 0.0455668, 
    'bi': 0, 
    'bj': 0, 
    'ckt': "'1 '", 
    'gi': 0, 
    'gj': 0, 
    'i': 10002, 
    'j': 10001, 
    'len': 46.8, 
    'metered_end': 1, 
    'owner': [1, 0, 0, 0], 
    'owner_fraction': [1, 1, 1, 1], 
    'r': 0.0574738, 
    'ratings': [185.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    'status': True, 
    'x': 0.297874
};
loaded_file[‘transformers’][0] = { // only need 'i' and 'j' and 'k'
    'ang': [0, 0, 0], 
    'base0': [138, 0, 0], 
    'base1': [345, 0, 0], 
    'bmag': 0, 
    'ckt': "'1 '", 
    'cm': 1, 
    'cod': [0, 0, 0], 
    'cont': [10013, 0, 0], 
    'cw': 1, 
    'cz': 1, 
    'gmag': 0, 
    'i': 10013, 
    'is_in_contingency': False, 
    'j': 10012, 
    'k': 0, 
    'mag1': 0, 
    'mag2': 0, 
    'name': "'        	'", 
    'nod': [-1, -1, -1], 
    'nomv': [138, 345, 1], 
    'non_metered_end': 2, 
    'ntp': [33, 33, 33], 
    'oscillated': False, 
    'owner': [1, 0, 0, 0], 
    'owner_fraction': [1, 1, 1, 1], 
    'r_1_2': 0.00026094, 
    'r_2_3': 0, 'r_3_1': 0, 
    'ratings': [
        [473.63, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ], 
    'rloss': [0.00026094, 0, 0], 
    'rma': [1.1, 1.1, 1.1], 
    'rmi': [0.9, 0.9, 0.9], 
    'sbase_1_2': 100, 
    'sbase_2_3': 100, 
    'sbase_3_1': 100, 
    'status': 1, 
    'table': [0, 0, 0], 
    'tr': [1, 0, 0], 
    'va_star': 0, 
    'vm_star': 1, 
    'vma': [1.01, 1.1, 1.1], 
    'vmi': [0.99, 0.9, 0.9], 
    'wbase0': [138, 0, 0], 
    'wbase1': [345, 0, 0], 
    'winding_status': [True, False, False], 
    'windv': [1, 1, 1], 
    'x_1_2': 0.0193438, 
    'x_2_3': 0, 
    'x_3_1': 0, 
    'xloss': [0.0193438, 0, 0]
};

// Notes 
    
    // Each bus will be a node in your graph, identified by its number
    // Lines and transformers are the edges
        // i ("from bus") and j ("to bus")
            // You do not need to consider the directionality of the edge (just that the edge exists)
            // If more than one edge exists between two nodes, you only need to draw a single edge
        // "k" Transformers may also have a k bus 
            // If you encounter a non-zero k value, you must build three edges: i-j, j-k, and k-i
        // If an edge has an i, j, or k bus that does not exist (i.e., there is no bus with that number), ignore the edge

    // User inputs
        // Bus number (int): the specific node to “focus on”
        // Levels (int): the number of edges “away” from the focal point to view
            // ex. If this is set to be 2, then your app should render the graph focusing on the bus number specified in (1) and all buses within two edges from that bus (i.e., nearest neighbors and their nearest neighbors).