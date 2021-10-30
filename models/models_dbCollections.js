import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    full_name: String,
    email: String, 
    phone: String,
    birthday: String,
    role: String
});

const UserDB = mongoose.model('User', UserSchema);

const KeoBetSchema = new mongoose.Schema({
    home_id: String,
    guest_id: String,
    date_time: String,
    status: String,
    bet_rate: String,
    winner_id: String,
});

const KeoBet = mongoose.model('KeoBet', KeoBetSchema);

const TeamSchema = new mongoose.Schema({
    id: String,
    team_name: String,
    img_url: String,
    location: String,
});

const Team = mongoose.model('Team', TeamSchema);

const WalletSchema = new mongoose.Schema({
    user_id: String,
    balance: Number,
});

const Wallet = mongoose.model('Wallet', WalletSchema);

const TransactionHistorySchema = new mongoose.Schema({
    user_id: String,
    trans_date: String,
    trans_amount: Number,
    bet_id: String,
    team_bet_id: String,
    activity_status: String,
    winnings: Number,
});

const TransactionHistory = mongoose.model('TransactionHistory', TransactionHistorySchema);

// module.exports = { UserDB, KeoBet, Team, Wallet, TransactionHistory };
export { UserDB, KeoBet, Team, Wallet, TransactionHistory };